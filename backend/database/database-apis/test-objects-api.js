// Partially Generated Code
const coreDb = require('../core-db');
const ObjectId = require('mongodb').ObjectID;


// Partially Generated Code
async function testGeneratedCode(testData) {
  const db = await coreDb.getOrConnect();
  let payload = null;
  console.log(testData)
  try {
    // TODO
    // Example: 
    payload = await db.collection('testObjects').insertOne({'testData': testData.param1});

  } catch (err) {
    console.error(err);
    payload = false;
  }
  return payload;
}


// Partially Generated Code
async function testGeneratedCode2(testData) {
  const db = await coreDb.getOrConnect();
  let payload = null;
  console.log('TODO: Write db query at backend/database/database-apis/test-objects-api.js for input', testData)
  try {
    // TODO
    // Example: 
    payload = await db.collection('testObjects').insertOne({'email': testData.param1});

  } catch (err) {
    console.error(err);
    payload = false;
  }
  return payload;
}

// Partially Generated Code
async function testGeneratedCode3(testData) {
  const db = await coreDb.getOrConnect();
  let payload = null;
  console.log('TODO: Write db query at backend/database/database-apis/test-objects-api.js for input', testData)
  try {
    // TODO
    // Example: 
    payload = await db.collection('testObjects').insertOne({'email': testData.param1});

  } catch (err) {
    console.error(err);
    payload = false;
  }
  return payload;
}

module.exports = {
  testGeneratedCode3: testGeneratedCode3,
  testGeneratedCode2: testGeneratedCode2,
  testGeneratedCode: testGeneratedCode,

}