// Partially Generated Code
const assert = require('assert');
const socketIOClient = require('socket.io-client');

describe('#/Test-object Controller', () => {
  let socket = socketIOClient('http://localhost:3002');
  // Tests:
  // Partially Generated Code
  describe('#/testGeneratedCode', () => {
    it('should testGeneratedCode', async () => {
      const inputData = {
        param1: param1,
        param2: param2
      }
      const options = {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }

      axios.post(process.env.URL + '/testGeneratedCode', inputData, options).then(response => {
        // TODO
        // Example:
        // assert.equal(outputData, true);
      }).catch(err => console.error(err))
    });
  });

});
