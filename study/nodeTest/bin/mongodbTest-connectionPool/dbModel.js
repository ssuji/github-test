/**
 * Created by suji on 2017-01-23.
 */
// mongoose
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var mongo_options = require('./dbConfig.js');

var conn = mongoose.createConnection('mongodb://localhost:27017/nodejstest', mongo_options);
conn.on('error', console.error.bind(console, 'connection error:'));
conn.once('open', function(){
    console.log('mongodb connection success!');
    return;
});
var user_schema = mongoose.Schema({
        _id : Number,
        name : String,
        sex : String,
        addr : String,
        phone : String
    },
    { versionKey: false }
);

// create model with mongodb collection & schema
var User = conn.model('users',user_schema);
//console.log(User);


module.exports = User;