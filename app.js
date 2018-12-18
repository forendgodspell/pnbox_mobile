var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
    //logger.debug('Hello World!');
    //logger.info('Hello World!');
});

//serial comport
require('./comport.js');
var logger = require('./log.js');
var db = require('./db.js');
var comport = require('./comport.js');