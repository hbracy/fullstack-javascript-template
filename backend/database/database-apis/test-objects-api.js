// Partially Generated Code
const coreDb = require('../core-db');
const ObjectId = require('mongodb').ObjectID;

// Partially Generated Code
async function testGeneratedCode(inputData) {
  const db = await coreDb.getOrConnect();
  let payload = null;
  console.log('TODO: Write db query at backend/database/database-apis/test-objects-api.js for input', inputData)
  try {
    // TODO
    // Example: 
    payload = await db.collection('testObjects').insertOne({'email': inputData.param1});

  } catch (err) {
    console.error(err);
    payload = false;
  }
  return payload;
}

module.exports = {
  testGeneratedCode: testGeneratedCode,

}