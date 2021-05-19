const { Router } = require('express');
const routes = require('.');
const connection = require('../app/db.config');
const path = require('path');

const router = Router();

// get phones by station
router.get('/procedure/ExemptPercent/:station_id', (req, res, next) => { 
    try {
        connection.query(`CALL ExemptPercent('${req.params.station_id}', @M); SELECT @M`, (error, results, fields) => {
                                                    if(error){
                                                        throw error;
                                                    }
                                                     res.json({ query_result: results });
        })
    } catch(err) {
        console.log("error");
        next(err);
    }
}, (req, res, next) => {
    
});

// get phones by station
router.get('/procedure/StanPercent/:station_id', (req, res, next) => { 
    try {
        connection.query(`CALL StanPercent('${req.params.station_id}', @M); SELECT @M`, (error, results, fields) => {
                                                    if(error){
                                                        throw error;
                                                    }
                                                     res.json({ query_result: results });
        })
    } catch(err) {
        console.log("error");
        next(err);
    }
}, (req, res, next) => {
    
});

// get phones by station
router.get('/procedure/ExemptPercentOverall', (req, res, next) => { 
    try {
        connection.query(`CALL ExemptPercentOverall(@M); SELECT ROUND(@M, 2)`, (error, results, fields) => {
                                                    if(error){
                                                        throw error;
                                                    }
                                                     res.json({ query_result: results });
        })
    } catch(err) {
        console.log("error");
        next(err);
    }
}, (req, res, next) => {
    
});

// get phones by station
router.get('/procedure/StanPercentOverall', (req, res, next) => { 
    try {
        connection.query(`CALL StanPercentOverall(@M); SELECT ROUND(@M, 2)`, (error, results, fields) => {
                                                    if(error){
                                                        throw error;
                                                    }
                                                     res.json({ query_result: results });
        })
    } catch(err) {
        console.log("error");
        next(err);
    }
}, (req, res, next) => {
    
});

// get phones by station
router.get('/procedure/ExemptPercentDistrict/:district_name', (req, res, next) => { 
    try {
        connection.query(`CALL ExemptPercentDistrict('${req.params.district_name}', @M); SELECT ROUND(@M, 2)`, (error, results, fields) => {
                                                    if(error){
                                                        throw error;
                                                    }
                                                     res.json({ query_result: results });
        })
    } catch(err) {
        console.log("error");
        next(err);
    }
}, (req, res, next) => {
    
});

// get phones by station
router.get('/procedure/StanPercentDistrict/:district_name', (req, res, next) => { 
    try {
        connection.query(`CALL StanPercentDistrict('${req.params.district_name}', @M); SELECT ROUND(@M, 2)`, (error, results, fields) => {
                                                    if(error){
                                                        throw error;
                                                    }
                                                     res.json({ query_result: results });
        })
    } catch(err) {
        console.log("error");
        next(err);
    }
}, (req, res, next) => {
    
});

// get phones by station
router.get('/procedure/StanPercentStationType/:station_type', (req, res, next) => { 
    try {
        connection.query(`CALL StanPercentStationType('${req.params.station_type}', @M); SELECT ROUND(@M, 2)`, (error, results, fields) => {
                                                    if(error){
                                                        throw error;
                                                    }
                                                     res.json({ query_result: results });
        })
    } catch(err) {
        console.log("error");
        next(err);
    }
}, (req, res, next) => {
    
});

// get phones by station
router.get('/procedure/ExemptPercentStationType/:station_type', (req, res, next) => { 
    try {
        connection.query(`CALL ExemptPercentStationType('${req.params.station_type}', @M); SELECT ROUND(@M, 2)`, (error, results, fields) => {
                                                    if(error){
                                                        throw error;
                                                    }
                                                     res.json({ query_result: results });
        })
    } catch(err) {
        console.log("error");
        next(err);
    }
}, (req, res, next) => {
    
});

module.exports = router;