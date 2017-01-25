/**
 * Created by suji on 2017-01-23.
 */

var oracledb = require('oracledb');

var user = 'scott';
var pwd = 'tiger';
var connInfo = 'localhost/ORCL';

var db = {};
db.func = function(req,res) {
    oracledb.getConnection(
        {
            user: user,
            password: pwd,
            connectString: connInfo
        },
        function(err, connection) {
            if(err) { console.error(err.message); return; }

            connection.execute(
                "SELECT to_char(sysdate, 'YYYYMMDD') FROM dual",
                [],
                function(err, result) {
                    if(err) { console.error(err.message); return; }
                    console.log("result", result);
                }
            );
        }
    );
    return "ok";
};


module.exports = db;