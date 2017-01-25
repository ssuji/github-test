/**
 * Created by suji on 2017-01-23.
 */
var oracledb = require('oracledb');
var dbConfig = require('./dbconfig.js');

var CRUDTest = {};

CRUDTest.insert = function(req, res, next) {
    oracledb.getConnection(dbConfig, function(err, connection) {
        if(err) { console.error(err.message); return; }

        var id = req.body.id;
        var name = req.body.name;
        var sex = req.body.sex;
        var addr = req.body.addr;
        var phone = req.body.phone;

        connection.execute(
            "INSERT INTO USERS(id, name, sex, addr, phone) VALUES(:id, :name, :sex, :addr, :phone)",
            [id, name, sex, addr, phone],
            function(err, result) {
                if(err) { console.error(err.message); return; }
                connection.commit(function(err){
                   if(err) {
                       console.log(err.message);
                       return;
                   }
                   return res.status(200).send('Success to insert user');
                });
                //console.log("result", result);
            }
        );
    });
    return;
};

CRUDTest.select = function(req,res,next) {
    //console.log(req.body);
    oracledb.getConnection(dbConfig, function(err, connection) {
        if(err) { console.error(err.message); return; }

        connection.execute(
            "SELECT * FROM USERS",
            [],
            { outFormat: oracledb.OBJECT },
            function(err, result) {
                if(err) { console.error(err.message); return; }

                //console.log("result", result);
                return res.status(200).send(result.rows);
            }
        );
    });
    return;
};
CRUDTest.find = function(req, res, next) {
    oracledb.getConnection(dbConfig, function(err, connection) {
        if(err) { console.error(err.message); return; }

        var id = req.params.id;

        connection.execute(
            "SELECT * FROM USERS WHERE id=:id",
            [id],
            { outFormat: oracledb.OBJECT },
            function(err, result) {
                if(err) { console.error(err.message); return; }

                //console.log("result", result);
                return res.status(200).send(result.rows);
            }
        );
    });
    return;
};
CRUDTest.delete = function(req, res, next) {
    oracledb.getConnection(dbConfig, function(err, connection) {
        if(err) { console.error(err.message); return; }

        var id = req.params.id;

        connection.execute(
            "DELETE FROM USERS WHERE id=:id",
            [id],
            function(err, result) {
                if(err) { console.error(err.message); return; }
                connection.commit(function(err){
                    if(err) {
                        console.log(err.message); return;
                    }
                    return res.status(200).send('Success to delete user');
                });
                //console.log("result", result);
            }
        );
    });
    return;
};

module.exports = CRUDTest;