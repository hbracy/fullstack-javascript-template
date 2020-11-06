
// macOS Background
// brew services start mongodb-community@4.2
// brew services stop mongodb-community@4.2

// macOS Foreground
// mongod

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost/title'
let connection;

function connect() {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
        if (err) { reject(err); return; };
        resolve(db);
        connection = db.db('template');
    });
  });
}


function get() {
    if (!connection) {
      throw new Error('Call connect first!');
    }

    return connection;
}

async function getOrConnect() {
  if (!connection) {
    await connect();
  }
  return connection;
}



module.exports.connect = connect;
module.exports.get = get;
module.exports.getOrConnect = getOrConnect;

// module.exports.getOrConnect = () => {
//   if()
// }