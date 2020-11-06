const express = require("express");
let router = express.Router();
// Imports
let testObjectController = require('../routes/test-object-controller.js');
let indexController = require("../routes/index");

const tools = require('../tools');

module.exports = function(app) {

  app.use(express.json());
  app.use(router);
  // Register controllers here
  testObjectController(router); // Partially Generated Code
  indexController(router);

  // Protect all reserved routes
  router.use('/reserved', function(req, res, next) {
    // check header or url parameters or post parameters for token
    console.log(req.headers)
    let token = req.headers.authorization;
    if (!token) return; //if no token, continue

    token = token.replace('Bearer ', '');

    const validUser = tools.validateToken(token);

    if (validUser) {
      console.log('VALID TOKEN')
      req.user = validUser;
      next();
    } else {
      console.log('NOT VALID TOKEN')
      res.send(false);
    }
  });


};