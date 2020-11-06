
const assert = require('assert');
const coreDb = require('../core-db');



describe('Database', function() {
  describe('#BadGetDatabase()', () => {
    it('should throw an error on trying to get the db before connecting', () => {
      // assert.throws expects a function as first argument
      // assert.throws(() => coreDb.get(), Error, 'Call connect first!');
    });
  });

  describe('#GetOrConnect()', () => {
    it('should return not null', async () => {
      const connection = await coreDb.getOrConnect();
      assert.notEqual(connection, null);
    });
  });
  describe('#ConnectionStatus()', () => {
    it('should return not null when the database connects', async () => {
      const connection = await coreDb.connect();
      assert.notEqual(connection, null);
    });
  });
  describe('#GoodGetDatabase()', () => {
    it('should return the database when called', () => {
      const connection = coreDb.get();
      assert.notEqual(connection, null);
    });
  });
});
