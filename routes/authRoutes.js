const { Router } = require('express');
const routes = require('.');
const main = require('../app/db.config');
const path = require('path');
// const users = require('../app/auth.config');
const router = Router();
const jwt = require('jsonwebtoken');
const accessTokenSecret = require('../app/auth.token');
const connection = require('../app/db.config');
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.post('/login', (req, res, next) => {
    try {
        const { username, password } = req.body;

        function loginUser(callback) {
            getUser(username, (error, results) => {
                if(error || !results.length) return callback(true, 'Error or user not found');
                bcrypt.compare(password, results[0].user_password, function(err, result) {
                    if(result){
                        const accessToken = jwt.sign({ username: results[0].user_name, role: results[0].user_role }, accessTokenSecret,  { expiresIn: '1800s' });
                        res.json({ accessToken });
                        return callback(null, accessToken);
                    }else{
                        return callback(true, 'Invalid password');
                    }
                });
            });
        }
        
        function getUser(username, callback) {
            connection.query(`SELECT * FROM user_list WHERE user_name = '${username}'`, (error, results, fields) => {
                if(error) return callback(error);
                callback(null, results);
            });
        };

        loginUser(function(error, results){
            if(error){
                res.json({error: results});
            }else{
                return results;
            }
        });
    } catch(err) {
        console.log("error");
        next(err);
    }
});

router.post('/sign_up', (req, res, next) => {
    try {
        const { username, password } = req.body;
        
        function doesUserExist(callback) {
            getUser(username, (error, results) => {
                if(results.length) {
                    return callback(true, 'A user with this name already exists');
                }else{
                    return callback(false, "Go ahead");
                }
            });
        }
        
        function getUser(username, callback) {
            connection.query(`SELECT * FROM user_list WHERE user_name = '${username}'`, (error, results, fields) => {
                if(error) return callback(error);
                callback(null, results);
            });
        };

        doesUserExist(function(error, results){
            if(error){
                res.json({error: results});
            }else{
                bcrypt.hash(password, saltRounds, function(err, hash) {
                    connection.query(`INSERT INTO user_list 
                                       (user_name, 
                                        user_password,
                                        user_role) 
                                      VALUES 
                                        ('${username}', 
                                        '${hash}',
                                        'member')`, (error, results, fields) => {
                                            if(error){
                                                throw error;
                                            }
                                            res.json({ query_result: results });
                                          })
                });
            }
        });
    } catch(err) {
        console.log("error");
        next(err);
    }
});


module.exports = router;