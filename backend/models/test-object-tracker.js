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
  this.testGeneratedCode = async function testGeneratedCode(testData) {
    console.log('data', testData);
    // TODO
    let payload = await testObjectsAPI.testGeneratedCode(testData);
    // console.log('payload', payload);
    return payload;
  }

  // Partially Generated Code
  this.testGeneratedCode2 = async function testGeneratedCode2(testData) {
    console.log('data', testData);
    // TODO
    let payload = await testObjectsAPI.testGeneratedCode2(testData);
    // console.log('payload', payload);
    return payload;
  }

  // Partially Generated Code
  this.testGeneratedCode3 = async function testGeneratedCode3(testData) {
    console.log('data', testData);
    // TODO
    let payload = await testObjectsAPI.testGeneratedCode3(testData);
    // console.log('payload', payload);
    return payload;
  }

  return this;
}


module.exports = TestObjectTracker

