/**
 * Created by Administrator on 2017/7/18.
 */
/**
 * Created by Administrator on 2017/7/18.
 */
/**
 * Created by Administrator on 2017/7/17.
 */
var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var pool = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'xiaoyu.0',
    database:'module',
    port:3306,
    connectionLimit:600
});
router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "X-Requested-With");
    // res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    // res.header("X-Powered-By", ' 3.2.1');
    // res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
var fs = require('fs');
var formidable = require("formidable");

function getUserByName(uname,callback){
    pool.getConnection(function(err,connection){
        var sql = 'select * from SY_CON where name = ?';
        connection.query(sql,[uname],function(err,result){
            if(err){
                console.log("ERRor:"+err.message);
                return;
            }
            connection.release();
            console.log("innerggetUserByName");
            callback(err,result);
        })
    })
}


/* GET users listing. */
router.post('/sy_Demo', function(req, res) {
    getUserByName(null,function (a,b) {
        res.send(b)
    });
});

module.exports = router;
