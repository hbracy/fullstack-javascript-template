'use strict';

const coreDb = require('./database/core-db');
const jwt = require('jsonwebtoken');

function consoleDBLog(...strings) {
  let str = strings.join(' ');
  console.log(new Date());
  console.log(str);
  let db = coreDb.get();
  // console.log(db);
  db.collection('logs').insertOne({
    date: new Date(),
    log: str,
  });
}

async function generateToken(user) {
  //1. Dont use password and other sensitive fields
  //2. Use fields that are useful in other parts of the     
  //app/collections/models
  let u = {
   email: user.email,
   _id: user._id.toString(),
  };  

  try {
    let token = await jwt.sign(u, process.env.JWT_SECRET, {
       expiresIn: 60 * 60 * 24 // expires in 24 hours
    });
    return token;
  } catch (err) {
    console.error(err);
    return false;
  }

}

function validateToken(authToken) {
  let toReturn = false;
  try {
    toReturn = jwt.verify(authToken, process.env.JWT_SECRET);
  } catch (err) {
    // console.log(err);
  }
  return toReturn;
}

module.exports = {
  consoleDBLog: consoleDBLog,
  generateToken: generateToken,
  validateToken: validateToken,
};

















