// Partially Generated Code
const TestObjectTracker = require('../models/test-object-tracker')
const testObjectsAPI = require('../database/database-apis/test-objects-api');

// Optional, for state keeping between clients
let testObjectTracker = new TestObjectTracker();

function testObjectController(router) {
// Partially Generated Code
  router.post('/testGeneratedCode', async (req, res) => {
    // console.log('testGeneratedCode', req.body);
    let inputData = req.body;
    // TODO
    let payload = await testObjectsAPI.testGeneratedCode(inputData);
    res.send(payload);
  });

	
}
// TODO

module.exports = testObjectController