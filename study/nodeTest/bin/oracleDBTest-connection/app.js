/**
 * Created by suji on 2017-01-23.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var hostname = '127.0.0.1';
var port = 3333;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/oracledbtest',  require('./oracleDBTest.js'));


app.listen(port, hostname, () => {
    console.log(`Example app listening on http://${hostname}:${port}/`);
});