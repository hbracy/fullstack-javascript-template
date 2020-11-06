'use strict';

// Imports
const http = require('http');
const express = require('express');
const app = express();
const server = http.Server(app);
const path = require('path');
const cors = require('cors');
require('dotenv').config();
const os = require('os');
const fs = require('fs');
const mongodb = require('mongodb');

// Custom Imports
const coreDb = require('./database/core-db');
const consoleDBLog = require('./tools').consoleDBLog;

// Library Variables
const MongoClient = mongodb.MongoClient

// Global Variables
const localhost = '0.0.0.0';
const hostname = 'localhost';
const port = process.env.PORT || 3000;
const title = 'template';

//Pre DB Setup
app.use(cors())
app.options('*', cors());

// Connect to the DB
coreDb.connect().then((db) => {
  // console.log(db);

  // Post DB setup
  require('./startup/register-routes')(app);

  // One time functions. ALWAYS COMMENT OUT WHEN DONE
  // require('./database/call-once/test-objects-setup.js').setupTestObject();

  // Start the http server
  server.listen(port, hostname, () => {
    consoleDBLog('Server running at http://' + hostname + ':' + port + '/');
  });
}).catch((err) =>{
  console.log(err);
});
