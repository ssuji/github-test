/**
 * Created by suji on 2017-01-19.
 */

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

// connection URL
var uri = 'mongodb://localhost:27017/';

MongoClient.connect(uri, function(err, db) {
   assert.equal(null, err);
   console.log("Connected sucessfully to server");

   db.close();
});