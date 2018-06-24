const mongoose            = require('mongoose');
const { Client }          = require('../../../db/schemas/Client');
const { memberSchema }    = require('../../../db/schemas/Member');
const utils               = require('../../../utils')

// Iterate through every Client adding memberId to members[]
/**
 * @method saveMemberIdIntoClientsMembersList
 * @param {Object} Member
 * @returns {Query Status}
 * @description
 * Accesses the array of Client _ids in Member.networks[Array].
 * Runs an update query on each of the Clients whose _id matches
 * an _id within Member.networks[Aray].
 * For each matching document (a Client), it pushes the Member's
 * auth0Id into that Client's members[Array].
 */
async function saveMemberIdIntoClientsMembersList(Member) {
  // Construct query
  let query = { "_id": { "$in": Member.networks } };
  // Set update operation
  let update = { "$push": { members: Member.auth0Id } };
  // Push Member's id into each of the matching Client's members array
  let result = await Client.updateMany(query, update);
  return result;
}

/**
 * @method fetchURIs
 * @param {Array} client_ids
 * @returns {Array} of objects
 * @description
 * Receives an Array of Client _ids.
 * Runs a query that retrieves ONLY the "dbname"
 * and the "uri" FOR EACH matching Document (Client).
 * Returns an Array of results (Objects) containing
 * these pieces.
 */
async function fetchURIs(client_ids) {
  // Construct query
  let query = { "_id": { "$in": client_ids } };
  // Set query projection
  let projection = { "dbname": 1, "uri": 1 };
  // Find Clients by _id.
  // Retrieve URI and DBNAME for each match.
  let result = await Client.find(query, projection);
  // Construct DB URI for each Client and store results in an array
  // let uris = result.map(elem => elem.uri + elem.dbname);
  return result;
}

/**
 * @method registerMemberInEachSelectedNetwork
 * @param {Object} memberObj 
 * @param {Array} uris
 * @returns {?}
 * @description
 * Receives the Member Object and an Array of Client URIs.
 * Iterates through every URI and:
 * 1. Checks if it's valid.
 *  1.1 If so, it uses the URI to open a connection to that DB.
 *  1.2 If URI is not valid, no attempt to open a connection is
 *      made and an error is logged (this part needs better handling).
 * 2. Opens a connection to Client's DB.
 * 3. Saves Member Object as Document into Client's Member Collection.
 *  3.1 Some error catching here would be helpful
 * 4. Closes the connection? [x]
 * 
 */
async function registerMemberInEachSelectedNetwork(memberObj, uris) {
  // for (let i = 0; i < array.length; i++) {
  //   const element = array[i];
    
  // }
  uris.forEach(client => {

    // check for valud uri
    if (utils.isValidUrl(client.uri)) {
      // construct Client's DB URI
      let clientDbUri = client.uri + client.dbname;
      // console.log('going to open connection to... ' + clientDbUri)
      // Open connection to CLient's DB!
      let db = mongoose.createConnection(clientDbUri, { poolSize: 10 });
      // If there's an error, notify us.
      db.on('error', function() {
        console.log('Couldn\'t connect to ' + clientDbUri)
      });
      // If connection is successful, perform some operations
      db.on('open', function() {
        // Create a reference to the MemberCollection
        let MemberCollection = db.model('Member', memberSchema);

        // try/catch somewhere here?

        // Save Member Document into Member Collection
        MemberCollection.create(memberObj, function(err, doc) {
          if(err) {
            console.log('Error saving Member: ' + err)
          }

          console.log('Member inserted: ' + db.name + ' at ' + db.host);
          // return doc
        });

      });
    } else {
      console.log('Caution - Invalid Client URI ' + client.uri + client.dbname);
    }

  });
}

module.exports = async function registerMember(Member) {
  // step1 - add member's id to clients' members array
  let result1 = await saveMemberIdIntoClientsMembersList(Member);
  if (result1.ok !== 1) return new Error('Error in step1');
  // step2 - fetch the URI for each client's DB
  let uris = await fetchURIs(Member.networks);
  // step3 - save Member document into each client's database (Member Collection)
  let result2 = await registerMemberInEachSelectedNetwork(Member, uris);

  return result2;
}

