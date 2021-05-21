const { Router } = require('express');
const routes = require('.');
const connection = require('../app/db.config');
const e = require('express');
const { authenticateJWT } = require('../middlewares/authorization.middleware');

const router = Router();

// get subs by station_id
router.get('/subscribers/:station_id', authenticateJWT, (req, res, next) => {
    try {
        connection.query(`SELECT * FROM subscribers WHERE station_id=${req.params.station_id}`, (error, results, fields) => {
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
}, (req, res, next) => {
    
});


// get subs by station_id and subscriber_type
router.get('/subscribers/:station_id/:subscriber_type', authenticateJWT, (req, res, next) => {
    try {
        connection.query(`SELECT * FROM subscribers WHERE station_id=${req.params.station_id} AND subscriber_type="${req.params.subscriber_type}"`, (error, results, fields) => {
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
}, (req, res, next) => {
    
});

// get subs by station_id and age category
router.get('/subscribers/:station_id/:age_min/:age_max', authenticateJWT, (req, res, next) => {
    try {
        connection.query(`SELECT * FROM subscribers WHERE station_id=${req.params.station_id} AND subscriber_age BETWEEN ${req.params.age_min} AND ${req.params.age_max}`, (error, results, fields) => {
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
}, (req, res, next) => {
    
});

// get subs by station_id and last name
router.get('/subscribers_by_last_name/:station_id/:subscriber_last_name', authenticateJWT, (req, res, next) => { // idk wtf is wrong with this one, fix it later
    try {
        connection.query(`SELECT * FROM subscribers WHERE station_id=${req.params.station_id} AND subscriber_last_name="${req.params.subscriber_last_name}"`, (error, results, fields) => {
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
}, (req, res, next) => {
    
});

module.exports = router;