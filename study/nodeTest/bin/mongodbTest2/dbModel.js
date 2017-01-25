/**
 * Created by suji on 2017-01-23.
 */
// mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/nodejstest');
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function(){
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
var User = mongoose.model('users',user_schema);
//console.log(User);


module.exports = User;