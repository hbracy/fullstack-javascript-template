// Partially Generated Code
const assert = require('assert');
const socketIOClient = require('socket.io-client');

describe('#/Test-object Controller', () => {
  let socket = socketIOClient('http://localhost:3002');
  // Tests:
  // Partially Generated Code
  describe('#/testGeneratedCode3', () => {
    it('should testGeneratedCode3', async () => {
      const testData = {
        param1: param1,
        param2: param2
      }
      const options = {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }

      axios.post(process.env.URL + '/testGeneratedCode3', testData, options).then(response => {
        // TODO
        // Example:
        // assert.equal(testOutput, true);
      }).catch(err => console.error(err))
    });
  });

  // Partially Generated Code
  describe('#/testGeneratedCode2', () => {
    it('should testGeneratedCode2', async () => {
      const testData = {
        param1: param1,
        param2: param2
      }
      const options = {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }

      axios.post(process.env.URL + '/testGeneratedCode2', testData, options).then(response => {
        // TODO
        // Example:
        // assert.equal(testOutpDut, true);
      }).catch(err => console.error(err))
    });
  });

  // Partially Generated Code
  describe('#/testGeneratedCode', () => {
    it('should testGeneratedCode', async () => {
      const testData = {
        param1: param1,
        param2: param2
      }
      const options = {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }

      axios.post(process.env.URL + '/testGeneratedCode', testData, options).then(response => {
        // TODO
        // Example:
        // assert.equal(testOutput, true);
      }).catch(err => console.error(err))
    });
  });

});
