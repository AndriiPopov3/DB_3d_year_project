const { Router } = require('express');
const routes = require('.');
const connection = require('../app/db.config');
const path = require('path');

const router = Router();

router.get('/stations', (req, res, next) => {
    try {
        connection.query('SELECT * FROM stations', (error, results, fields) => {
            res.json({ query_result: results });
        })
    } catch(err) {
        console.log("error");
        next(err);
    }
}, (req, res, next) => {
    
});

router.get('/subscribers', (req, res, next) => {
    try {
        connection.query('SELECT * FROM subscribers', (error, results, fields) => {
            res.json({ query_result: results });
            
        })
    } catch(err) {
        console.log("error");
        next(err);
    }
}, (req, res, next) => {
    
});

router.get('/phone_numbers', (req, res, next) => {
    try {
        connection.query('SELECT * FROM phone_numbers', (error, results, fields) => {
            res.json({ query_result: results });
        })
    } catch(err) {
        console.log("error");
        next(err);
    }
}, (req, res, next) => {
    
});

router.get('/subscriber_fees', (req, res, next) => {
    try {
        connection.query('SELECT * FROM subscriber_fees', (error, results, fields) => {
            res.json({ query_result: results });
        })
    } catch(err) {
        console.log("error");
        next(err);
    }
}, (req, res, next) => {
    
});

router.get('/public_phones', (req, res, next) => {
    try {
        connection.query('SELECT * FROM public_phones', (error, results, fields) => {
            res.json({ query_result: results });
        })
    } catch(err) {
        console.log("error");
        next(err);
    }
}, (req, res, next) => {
    
});

router.get('/intercity_log', (req, res, next) => {
    try {
        connection.query('SELECT * FROM intercity_log', (error, results, fields) => {
            res.json({ query_result: results });
        })
    } catch(err) {
        console.log("error");
        next(err);
    }
}, (req, res, next) => {
    
});

module.exports = router;