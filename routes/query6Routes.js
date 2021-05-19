const { Router } = require('express');
const routes = require('.');
const connection = require('../app/db.config');
const path = require('path');
const { authenticateJWT } = require('../middlewares/authorization.middleware');

const router = Router();

// get phones by station
router.get('/procedure/ExemptPercent/:station_id', authenticateJWT, (req, res, next) => { 
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
router.get('/procedure/StanPercent/:station_id', authenticateJWT, (req, res, next) => { 
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
router.get('/procedure/ExemptPercentOverall', authenticateJWT, (req, res, next) => { 
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
router.get('/procedure/StanPercentOverall', authenticateJWT, (req, res, next) => { 
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
router.get('/procedure/ExemptPercentDistrict/:district_name', authenticateJWT, (req, res, next) => { 
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
router.get('/procedure/StanPercentDistrict/:district_name', authenticateJWT, (req, res, next) => { 
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
router.get('/procedure/StanPercentStationType/:station_type', authenticateJWT, (req, res, next) => { 
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
router.get('/procedure/ExemptPercentStationType/:station_type', authenticateJWT, (req, res, next) => { 
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