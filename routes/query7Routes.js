const { Router } = require('express');
const routes = require('.');
const connection = require('../app/db.config');
const path = require('path');
const { authenticateJWT } = require('../middlewares/authorization.middleware');

const router = Router();


router.get('/subscribers/:station_id', authenticateJWT, (req, res, next) => { 
    try {
        connection.query(`SELECT * FROM subscribers 
                          WHERE station_id = ${req.params.station_id};
                          SELECT COUNT(subscriber_id) FROM subscribers 
                          WHERE station_id = ${req.params.station_id};`, (error, results, fields) => {
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

// get phones by station
router.get('/subscribers_by_district/:subscriber_address_district', authenticateJWT, (req, res, next) => { 
    try {
        connection.query(`SELECT * FROM subscribers 
                          WHERE subscriber_address_district = '${req.params.subscriber_address_district}';
                          SELECT COUNT(subscriber_id) FROM subscribers 
                          WHERE subscriber_address_district = '${req.params.subscriber_address_district}';`, (error, results, fields) => {
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

// get phones by station
router.get('/subscribers_by_station_type/:station_type', authenticateJWT, (req, res, next) => { 
    try {
        connection.query(`SELECT * FROM subscribers 
                          WHERE station_id IN (SELECT station_id 
                                               FROM stations 
                                               WHERE station_type = '${req.params.station_type}');
                          SELECT COUNT(subscriber_id) 
                          FROM subscribers 
                          WHERE station_id IN (SELECT station_id 
                                               FROM stations 
                                               WHERE station_type = '${req.params.station_type}');`, (error, results, fields) => {
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

// get phones by station
router.get('/subscribers_by_phone_type/:phone_type', authenticateJWT, (req, res, next) => { 
    try {
        connection.query(`SELECT * FROM subscribers 
                          WHERE subscriber_phone_type = '${req.params.phone_type}';
                          SELECT COUNT(subscriber_id) 
                          FROM subscribers 
                          WHERE subscriber_phone_type = '${req.params.phone_type}';`, (error, results, fields) => {
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

// get phones by station
router.get('/subscribers_by_phone_type_and_type/:subscriber_type/:phone_type', authenticateJWT, (req, res, next) => { 
    try {
        connection.query(`SELECT * FROM subscribers 
                          WHERE subscriber_phone_type = '${req.params.phone_type}'
                          AND  subscriber_type = '${req.params.subscriber_type}';
                          SELECT COUNT(subscriber_id) 
                          FROM subscribers 
                          WHERE subscriber_phone_type = '${req.params.phone_type}' 
                          AND subscriber_type = '${req.params.subscriber_type}';`, (error, results, fields) => {
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