const { Router } = require('express');
const routes = require('.');
const connection = require('../app/db.config');
const path = require('path');
const { authenticateJWT } = require('../middlewares/authorization.middleware');

const router = Router();

router.get('/stations', authenticateJWT, (req, res, next) => {
    try {
        const { role } = req.user;

        connection.query('SELECT * FROM stations', (error, results, fields) => {
            res.json({ query_result: results });
        })
    } catch(err) {
        console.log("error");
        next(err);
    }
});

router.get('/subscribers', authenticateJWT, (req, res, next) => {
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

router.get('/phone_numbers', authenticateJWT, (req, res, next) => {
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

router.get('/subscriber_fees', authenticateJWT, (req, res, next) => {
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

router.get('/public_phones', authenticateJWT, (req, res, next) => {
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

router.get('/intercity_log', authenticateJWT, (req, res, next) => {
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