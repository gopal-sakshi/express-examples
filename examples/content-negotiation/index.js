'use strict'

var express = require('express');
var app = module.exports = express();
var users = require('./db');

// so either you can deal with different types of formatting
// for expected response in index.js
app.get('/', function(req, res) {
  res.format({

    // html: function() {
    //   res.send('<ul>' + users.map(function(user){
    //     return '<li>' + user.name + '</li>';
    //   }).join('') + '</ul>');
    // },

    json: function(){
      res.json(users);
    }

    // text: function(){
    //   res.send(users.map(function(user){
    //     return ' - ' + user.name + '\n';
    //   }).join(''));
    // },

  });
});

// or you could write a tiny middleware like
// this to add a layer of abstraction
// and make things a bit more declarative:

function format(path) {
  var obj = require(path);
  return function(req, res){
    res.format(obj);
  };
}

app.get('/users', format('./users'));

/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}