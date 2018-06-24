//////////////////////////////////////////////////////////////////////////////////
/////////////////////          ImageUpload.js            /////////////////////////
//////////////////////////////////////////////////////////////////////////////////
///                                                                             //
///  Component that handles the upload of a Client's logo using a drag and      //
///  drop interface.  Uploads to Cloudinary.  See config for more info.         //
///                                                                             //
///  REFACTOR 0.7 - Members Whitelisting Added                                  //
///  DGO                                                                        //
//////////////////////////////////////////////////////////////////////////////////



import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import API from '../../../../common/utils/API';
import request from 'superagent';
const config = require('../../../../../config').init();



/// Styles for the dropzone
const dropZoneStyle ={
    backgroundColor: "#eee",
    border: "1px solid black",
    width: "100%",
    marginTop: "20px",
    marginBottom: "20px",
    padding: "20px"
}

/*
    REQUIRED PROPS:
        client - the client object we have stored in the wrapper's state
*/
export class ImageUpload extends Component {
    state = { 
        client: this.props.client,
    }


    saveClient() {
        API.client.updateClient(this.state.client).then(resp => {
            this.setState({ client: resp.data });
        }).catch(err => { 
            console.log(err) 
        });
    }
    onImageDrop = files => {
        const client = this.props.client;
        let upload = request.post(config.cloudinary.url)
            .field("upload_preset", config.cloudinary.preset)
            .field("file", files[0]);

        upload.end((err, resp) => {
            if(err) return console.log(err);

            if(resp.body.secure_url !== '') {
                let client = this.state.client;
                client.image = resp.body.secure_url;
                this.setState({ client: client, message: "Image uploaded!" });
                this.saveClient();
            }
        })
    }

    render() {
        return (
            <div>
                <h5>Logo</h5>
                { this.state.client.image ? <img src={ this.state.client.image } className="img-thumbnail img-fluid"  alt="Logo" /> : "" }    
                <Dropzone
                    style={dropZoneStyle}
                    multiple={false} accept="image/*"
                    onDrop={ this.onImageDrop }>
                    <p>Drop an image of your logo here or click to select one from your computer</p>
                </Dropzone>
            </div>
        )
    }
}