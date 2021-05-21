const { Router } = require('express');
const routes = require('.');
const connection = require('../app/db.config');
const path = require('path');
const { authenticateJWT } = require('../middlewares/authorization.middleware');

const router = Router();

router.get('/stations', authenticateJWT, (req, res, next) => {
    try {
        connection.query('SELECT * FROM stations', (error, results, fields) => {
            if(error){
                res.json({ message: error });
            }else{
                res.json({ query_result: results });
            }
        })
    } catch(err) {
        console.log("error");
        next(err);
    }
});

router.get('/subscribers', authenticateJWT, (req, res, next) => {
    try {
        connection.query('SELECT * FROM subscribers', (error, results, fields) => {
            if(error){
                res.json({ message: error });
            }else{
                res.json({ query_result: results });
            }
            
        })
    } catch(err) {
        console.log("error");
        next(err);
    }
});

router.get('/phone_numbers', authenticateJWT, (req, res, next) => {
    try {
        connection.query('SELECT * FROM phone_numbers', (error, results, fields) => {
            if(error){
                res.json({ message: error });
            }else{
                res.json({ query_result: results });
            }
        })
    } catch(err) {
        console.log("error");
        next(err);
    }
});

router.get('/subscriber_fees', authenticateJWT, (req, res, next) => {
    try {
        connection.query('SELECT * FROM subscriber_fees', (error, results, fields) => {
            if(error){
                res.json({ message: error });
            }else{
                res.json({ query_result: results });
            }
        })
    } catch(err) {
        console.log("error");
        next(err);
    }
});

router.get('/public_phones', authenticateJWT, (req, res, next) => {
    try {
        connection.query('SELECT * FROM public_phones', (error, results, fields) => {
            if(error){
                res.json({ message: error });
            }else{
                res.json({ query_result: results });
            }
        })
    } catch(err) {
        console.log("error");
        next(err);
    }
});

router.get('/intercity_log', authenticateJWT, (req, res, next) => {
    try {
        connection.query('SELECT * FROM intercity_log', (error, results, fields) => {
            if(error){
                res.json({ message: error });
            }else{
                res.json({ query_result: results });
            }
        })
    } catch(err) {
        console.log("error");
        next(err);
    }
});

router.get('/user_list', authenticateJWT, (req, res, next) => {
    try {
        const { role } = req.user;
        if (role !== 'admin') {
            return res.status(403).send({
               error: true,
               message: "Forbidden"
            });
       }
        connection.query('SELECT * FROM user_list', (error, results, fields) => {
            if(error){
                res.json({ message: error });
            }else{
                res.json({ query_result: results });
            }
        })
    } catch(err) {
        console.log("error");
        next(err);
    }
});

router.get('/queue', authenticateJWT, (req, res, next) => {
    try {
        const { role } = req.user;
        if (role !== 'admin' && role !== 'manager') {
            return res.status(403).send({
               error: true,
               message: "Forbidden"
            });
       }
        connection.query('SELECT * FROM queue', (error, results, fields) => {
            if(error){
                res.json({ message: error });
            }else{
                res.json({ query_result: results });
            }
        })
    } catch(err) {
        console.log("error");
        next(err);
    }
});

router.get('/queue_entry', authenticateJWT, (req, res, next) => {
    try {
        const { role } = req.user;
        if (role !== 'admin' && role !== 'manager') {
            return res.status(403).send({
               error: true,
               message: "Forbidden"
            });
       }
        connection.query('SELECT * FROM queue_entry', (error, results, fields) => {
            if(error){
                res.json({ message: error });
            }else{
                res.json({ query_result: results });
            }
        })
    } catch(err) {
        console.log("error");
        next(err);
    }
});

module.exports = router;