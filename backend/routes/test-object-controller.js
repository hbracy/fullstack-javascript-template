// Partially Generated Code
const TestObjectTracker = require('../models/test-object-tracker')
const testObjectsAPI = require('../database/database-apis/test-objects-api');

// Optional, for state keeping between clients
let testObjectTracker = new TestObjectTracker();

function testObjectController(router) {
// Partially Generated Code
  router.post('/testGeneratedCode3', async (req, res) => {
    // console.log('testGeneratedCode3', req.body);
    let testData = req.body;
    // TODO
    let payload = await testObjectsAPI.testGeneratedCode3(testData);
    res.send(payload);
  });

// Partially Generated Code
  router.post('/testGeneratedCode2', async (req, res) => {
    // console.log('testGeneratedCode2', req.body);
    let testData = req.body;
    // TODO
    let payload = await testObjectsAPI.testGeneratedCode2(testData);
    res.send(payload);
  });

// Partially Generated Code
  router.post('/testGeneratedCode', async (req, res) => {
    console.log('testGeneratedCode', req.body);
    let testData = req.body;
    // TODO
    let payload = await testObjectsAPI.testGeneratedCode(testData);
    res.send(payload);
  });

	
}
// TODO

module.exports = testObjectController