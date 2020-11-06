// Partially Generated Code
let testObjectsAPI = require('../database/database-apis/test-objects-api.js');
const consoleDBLog = require('../tools').consoleDBLog;

function TestObjectTracker() {

	// TODO
	// Example:
  // this.sendMessage = async function sendMessage(fromEmail, conversationId, message) {
  //   // console.log(fromEmail, toEmail, conversationId, message);
  //   let newMessage = await messagesAPI.sendMessage(fromEmail, conversationId, message);
  //   return  newMessage
  // }

  // Partially Generated Code
  this.testGeneratedCode = async function testGeneratedCode(inputData) {
    console.log('data', inputData);
    // TODO
    let payload = await testObjectsAPI.testGeneratedCode(inputData);
    // console.log('payload', payload);
    return payload;
  }

  return this;
}


module.exports = TestObjectTracker

