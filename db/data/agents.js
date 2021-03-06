
'use strict';

///////////////////////////////////////////////////////////////////////
///////////////////      configure agents          ////////////////////
//////////////////////////////////////////////////////////////////////

const uuidv1 = require('uuid/v1');

const objStore =  [
  {
  name: 'shipper',
	avatar: 'https://www.gravatar.com/avatar/',
  skills: [{
    skillname:  'echo',
    skilltype: 'api',
    skillsource: 'https://service.us.apiconnect.ibmcloud.com/gws/apigateway/api/626419717631ddc8385088c774354739816ad88f16ebf25c7f6e6c3a2fc12f23/api/echo'
  }],
  greeting: 'Hi I will help you ship',
	priority: '1',
	handle: 'cb-dev-shipproduct',
  handler: "openwhisk",
  id: uuidv1() },
  {
  name: 'banter',
  avatar: 'https://www.gravatar.com/avatar/',
  skills: [{
    skillname:  'echo',
    skilltype: 'api',
    skillsource: 'https://openwhisk.ng.bluemix.net/api/v1/web/patrick.howard@hotmail.com_dev/default/cb-dev-echo.json'
  },
  {
    skillname:  'echo2',
    skilltype: 'api',
    skillsource: 'https://openwhisk.ng.bluemix.net/api/v1/web/patrick.howard@hotmail.com_dev/default/cb-dev-echo2.json'
  },
  {
    skillname:  'echo3',
    skilltype: 'api',
    skillsource: 'https://openwhisk.ng.bluemix.net/api/v1/web/patrick.howard@hotmail.com_dev/default/cb-dev-echo3.json'
  },
  {
    skillname:  'echo4',
    skilltype: 'api',
    skillsource: 'https://openwhisk.ng.bluemix.net/api/v1/web/patrick.howard@hotmail.com_dev/default/cb-dev-echo4.json'
  }],
  greeting: 'Lets talk',
  priority: '1',
  handle: 'cb-dev-banter',
  handler: "openwhisk",
  id: uuidv1() },
  {
  name: 'help',
  avatar: 'https://www.gravatar.com/avatar/',
  skills: [{
    skillname:  'echo',
    skilltype: 'api',
    skillsource: 'https://openwhisk.ng.bluemix.net/api/v1/web/patrick.howard@hotmail.com_dev/default/cb-dev-echo.json'
  }],
  greeting: 'i am here to help',
  priority: '1',
  handle: 'cb-dev-help',
  handler: "openwhisk",
  id: uuidv1() },
  {
  name: 'music',
  avatar: 'https://www.gravatar.com/avatar/',
  skills: [{
    skillname:  'echo',
    skilltype: 'api',
    skillsource: 'https://openwhisk.ng.bluemix.net/api/v1/web/patrick.howard@hotmail.com_dev/default/cb-dev-echo.json'
  }],
  greeting: 'Lets sing',
  priority: '1',
  handle: 'cb-dev-music',
  handler: "openwhisk",
  id: uuidv1() },
  {
  name: 'marketing',
  avatar: 'https://www.gravatar.com/avatar/',
  skills: [{
    skillname:  'echo',
    skilltype: 'api',
    skillsource: 'https://openwhisk.ng.bluemix.net/api/v1/web/patrick.howard@hotmail.com_dev/default/cb-dev-echo.json'
  }],
  greeting: 'Let me talk',
  priority: '1',
  handle: 'cb-dev-marketing',
  handler: "openwhisk",
  id: uuidv1() },
  {
  name: 'pricing',
  avatar: 'https://www.gravatar.com/avatar/',
  skills: [{
    skillname:  'echo',
    skilltype: 'api',
    skillsource: 'https://openwhisk.ng.bluemix.net/api/v1/web/patrick.howard@hotmail.com_dev/default/cb-dev-echo.json'
  }],
  greeting: 'I price',
  priority: '1',
  handle: 'cb-dev-pricing',
  handler: "openwhisk",
  id: uuidv1() },
  {
  name: 'sales',
  avatar: 'https://www.gravatar.com/avatar/',
  skills: [{
    skillname:  'echo',
    skilltype: 'api',
    skillsource: 'https://openwhisk.ng.bluemix.net/api/v1/web/patrick.howard@hotmail.com_dev/default/cb-dev-echo.json'
  }],
  greeting: 'I talk a lot',
  priority: '1',
  handle: 'cb-dev-sales',
  handler: "openwhisk",
  id: uuidv1() },
  {
  name: 'registrar',
  avatar: 'https://www.gravatar.com/avatar/',
  skills: [{
    skillname:  'echo',
    skilltype: 'api',
    skillsource: 'https://openwhisk.ng.bluemix.net/api/v1/web/patrick.howard@hotmail.com_dev/default/cb-dev-echo.json'
  }],
  greeting: 'I will sign you up',
  priority: '1',
  handle: 'cb-dev-registrar',
  handler: "openwhisk",
  id: uuidv1() },
  {
  name: 'general',
  avatar: 'https://www.gravatar.com/avatar/',
  skills: [{
    skillname:  'echo',
    skilltype: 'api',
    skillsource: 'https://openwhisk.ng.bluemix.net/api/v1/web/patrick.howard@hotmail.com_dev/default/cb-dev-echo.json'
  }],
  greeting: 'I generally get things done',
  priority: '1',
  handle: 'cb-dev-general',
  handler: "openwhisk",
  id: uuidv1() },
  {
  name: 'chaoticbot',
  avatar: 'https://www.gravatar.com/avatar/',
  skills: [{
    skillname:  'echo',
    skilltype: 'api',
    skillsource: 'https://openwhisk.ng.bluemix.net/api/v1/web/patrick.howard@hotmail.com_dev/default/cb-dev-echo.json'
  }],
  greeting: 'I bring order to chaos',
  priority: '1',
  handle: 'cb-dev-chaoticbot',
  handler: "openwhisk",
  id: uuidv1() },
  {
  name: 'close',
  avatar: 'https://www.gravatar.com/avatar/',
  skills: [{
    skillname:  'echo',
    skilltype: 'api',
    skillsource: 'https://openwhisk.ng.bluemix.net/api/v1/web/patrick.howard@hotmail.com_dev/default/cb-dev-echo.json'
  }],
  greeting: 'I am the elegant close',
  priority: '1',
  handle: 'cb-dev-close',
  handler: "openwhisk",
  id: uuidv1() },
  {
  name: 'test',
  avatar: 'https://www.gravatar.com/avatar/',
  skills: [{
    skillname:  'echo',
    skilltype: 'api',
    skillsource: 'https://openwhisk.ng.bluemix.net/api/v1/web/patrick.howard@hotmail.com_dev/default/cb-dev-echo.json'},
    {
    skillname:  'startit',
    skilltype: 'system',
    skillsource: 'system'}],
  greeting: 'This is a testing agent -- call me whenever',
  priority: '1',
  handle: 'cb-dev-echo',
  handler: "openwhisk",
  id: uuidv1() },
  {
  name: 'content',
  avatar: 'https://www.gravatar.com/avatar/',
  skills: [{
    skillname: 'echo',
    skilltype: 'api',
    skillsource: 'https://openwhisk.ng.bluemix.net/api/v1/web/patrick.howard@hotmail.com_dev/default/cb-dev-echo.json'}
    ],
  greeting: 'What can I send you?',
  priority: '1',
  handle: 'cb-dev-content',
  handler: "openwhisk",
  id: uuidv1() },
  {
  name: 'notify',
  avatar: 'https://www.gravatar.com/avatar/',
  skills: [{
    skillname:  'echo',
    skilltype: 'api',
    skillsource: 'https://openwhisk.ng.bluemix.net/api/v1/web/patrick.howard@hotmail.com_dev/default/cb-dev-echo.json'},
    {
    skillname:  'startit',
    skilltype: 'system',
    skillsource: 'system'},
    {
    skillname:  'saveit',
    skilltype: 'system',
    skillsource: 'system' },
    {
    skillname:  'getit',
    skilltype: 'system',
    skillsource: 'system' },
    {
    skillname:  'deleteit',
    skilltype: 'system',
    skillsource: 'system' },],
  greeting: 'How can I notify you?',
  priority: '1',
  handle: 'cb-dev-notify',
  handler: "openwhisk",
  id: uuidv1() },
  {
  name: 'morehelp',
  avatar: 'https://www.gravatar.com/avatar/',
  skills: [{
    skillname:  'echo',
    skilltype: 'api',
    skillsource: 'https://openwhisk.ng.bluemix.net/api/v1/web/patrick.howard@hotmail.com_dev/default/cb-dev-echo.json'
  }],
  greeting: 'I am here to help',
  priority: '1',
  handle: 'cb-dev-morehelp',
  handler: "openwhisk",
  id: uuidv1() },
  {
  name: 'support',
  avatar: 'https://www.gravatar.com/avatar/',
  skills: [{
    skillname:  'echo',
    skilltype: 'api',
    skillsource: 'https://openwhisk.ng.bluemix.net/api/v1/web/patrick.howard@hotmail.com_dev/default/cb-dev-echo.json'
  }],
  greeting: 'I am your support bot',
  priority: '1',
  handle: 'cb-dev-support',
  handler: "openwhisk",
  id: uuidv1() },
  {
  name: 'live',
  avatar: 'https://www.gravatar.com/avatar/',
  skills: [{
    skillname:  'echo',
    skilltype: 'api',
    skillsource: 'https://openwhisk.ng.bluemix.net/api/v1/web/patrick.howard@hotmail.com_dev/default/cb-dev-echo.json'
  }],
  greeting: 'Let me connect you with a live agent',
  priority: '1',
  handle: 'cb-dev-live',
  handler: "openwhisk",
  id: uuidv1() },
  {
  name: 'returns',
  avatar: 'https://www.gravatar.com/avatar/',
  skills: [{
    skillname:  'echo',
    skilltype: 'api',
    skillsource: 'https://openwhisk.ng.bluemix.net/api/v1/web/patrick.howard@hotmail.com_dev/default/cb-dev-echo.json'
  }],
  greeting: 'I handle all returns',
  priority: '1',
  handle: 'cb-dev-return',
  handler: "openwhisk",
  id: uuidv1() },
  {
  name: 'proof',
  avatar: 'https://www.gravatar.com/avatar/',
  skills: [{
    skillname:  'echo',
    skilltype: 'api',
    skillsource: 'https://openwhisk.ng.bluemix.net/api/v1/web/patrick.howard@hotmail.com_dev/default/cb-dev-echo.json'
  }],
  greeting: 'There is no better proof',
  priority: '1',
  handle: 'cb-dev-proof',
  handler: "openwhisk",
  id: uuidv1() },
  {
  name: 'mediator',
  avatar: 'https://www.gravatar.com/avatar/',
  skills: [{
    skillname:  'echo',
    skilltype: 'api',
    skillsource: 'https://openwhisk.ng.bluemix.net/api/v1/web/patrick.howard@hotmail.com_dev/default/cb-dev-echo.json'
  }],
  greeting: 'I mediate things -- like trying to connect you with another agent',
  priority: '1',
  handle: 'cb-dev-mediator',
  handler: "openwhisk",
  id: uuidv1() },
  {
  name: 'purchase',
  avatar: 'https://www.gravatar.com/avatar/',
  skills: [{
    skillname:  'echo',
    skilltype: 'api',
    skillsource: 'https://openwhisk.ng.bluemix.net/api/v1/web/patrick.howard@hotmail.com_dev/default/cb-dev-echo.json'
  }],
  greeting: 'I will complete the purchase for you',
  priority: '1',
  handle: 'cb-dev-purchase',
  handler: "openwhisk",
  id: uuidv1() },
  {
  name: 'payor',
  avatar: 'https://www.gravatar.com/avatar/',
  skills: [{
    skillname:  'echo',
    skilltype: 'api',
    skillsource: 'https://openwhisk.ng.bluemix.net/api/v1/web/patrick.howard@hotmail.com_dev/default/cb-dev-echo.json'
  }],
  greeting: 'I take payments - cash or credit. No bitcoin',
  priority: '1',
  handle: 'cb-dev-payor',
  handler: "openwhisk",
  id: uuidv1() },
  {
  name: 'dispute',
  avatar: 'https://www.gravatar.com/avatar/',
  skills: [{
    skillname:  'echo',
    skilltype: 'api',
    skillsource: 'https://openwhisk.ng.bluemix.net/api/v1/web/patrick.howard@hotmail.com_dev/default/cb-dev-echo.json'
  }],
  greeting: 'I have been known to resolve all disputes, or at least make a record',
  priority: '1',
  handle: 'cb-dev-dispute',
  handler: "openwhisk",
  id: uuidv1() },
  {
  name: 'Nancy',
  avatar: 'https://www.gravatar.com/avatar/',
  skills: [{
    skillname:  'echo',
    skilltype: 'api',
    skillsource: 'https://openwhisk.ng.bluemix.net/api/v1/web/patrick.howard@hotmail.com_dev/default/cb-dev-echo.json'
  }],
  greeting: 'Hello - this is Nancy, your call center agent. How can I help?',
  priority: '1',
  handle: 'cb-dev-nancy',
  handler: "openwhisk",
  id: uuidv1() },
  {
  name: 'echo',
  avatar: 'https://www.gravatar.com/avatar/',
  skills: [{
    skillname:  'echo',
    skilltype: 'api',
    skillsource: 'https://openwhisk.ng.bluemix.net/api/v1/web/patrick.howard@hotmail.com_dev/default/cb-dev-echo.json'
  }],
  greeting: 'I just talk back',
  priority: '1',
  handle: 'cb-dev-echo',
  handler: "openwhisk",
  id: uuidv1() },
  {
  name: 'chaotic',
  avatar: 'https://www.gravatar.com/avatar/',
  skills: [{
    skillname:  'echo',
    skilltype: 'api',
    skillsource: 'https://openwhisk.ng.bluemix.net/api/v1/web/patrick.howard@hotmail.com_dev/default/cb-dev-echo.json'
  }],
  greeting: 'I am the original ChaoticBot',
  priority: '1',
  handle: 'cb-dev-chaotic',
  handler: "openwhisk",
  id: uuidv1() }
]

module.exports = objStore;
