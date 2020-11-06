// const express = require('express');
// const router = express.Router();

function indexController(router) {
  // respond with "hello world" when a GET request is made to the homepage
  router.get('/', function (req, res) {
    console.log('GETTING INDEX REQUEST');
    res.send('hello world')
  })

}

module.exports = indexController;