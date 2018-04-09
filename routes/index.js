var express = require('express');
var router = express.Router();
var server = require('../server/mysql-connection');
var person = require('../requests/person.request');

/* GET home page. */
router.get('/', function(request, response, next) {
  // res.render('index', { title: 'Express' });
  var connection = server.connection(response);
  person.getPersons(connection, response);
});

module.exports = router;
