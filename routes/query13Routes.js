const { Router } = require('express');
const routes = require('.');
const connection = require('../app/db.config');
const path = require('path');

const router = Router();

// all debtors with recent debt
router.get('/new_debtors', (req, res, next) => { 
    try {
        connection.query(`SELECT j.subscriber_first_name, j.subscriber_last_name, j.station_id 
                          FROM (SELECT s.subscriber_id, s.subscriber_first_name, s.subscriber_last_name, s.station_id, subscriber_debt, subscriber_intercity_debt, debt_time
                              FROM subscribers s 
                              JOIN subscriber_fees sf ON s.subscriber_id = sf.subscriber_id 
                              GROUP BY s.subscriber_id) j 
                          WHERE debt_time < 3 AND (j.subscriber_debt != 0 OR j.subscriber_intercity_debt != 0);
                          SELECT COUNT(j.subscriber_first_name) 
                          FROM (SELECT s.subscriber_id, s.subscriber_first_name, subscriber_debt, subscriber_intercity_debt, debt_time
                              FROM subscribers s 
                              JOIN subscriber_fees sf ON s.subscriber_id = sf.subscriber_id 
                              GROUP BY s.subscriber_id) j 
                          WHERE debt_time < 3 AND (j.subscriber_debt != 0 OR j.subscriber_intercity_debt != 0);`, (error, results, fields) => {
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

// debtors of station with recent debt
router.get('/new_debtors_by_station/:station_id', (req, res, next) => { 
    try {
        connection.query(`SELECT j.subscriber_first_name, j.subscriber_last_name, j.station_id 
                          FROM (SELECT s.subscriber_id, s.subscriber_first_name, s.subscriber_last_name, s.station_id, subscriber_debt, subscriber_intercity_debt, debt_time
                              FROM subscribers s 
                              JOIN subscriber_fees sf ON s.subscriber_id = sf.subscriber_id 
                              GROUP BY s.subscriber_id) j 
                          WHERE j.station_id = ${req.params.station_id} AND debt_time < 3 AND (j.subscriber_debt != 0 OR j.subscriber_intercity_debt != 0);
                          SELECT COUNT(j.subscriber_first_name) 
                          FROM (SELECT s.subscriber_id, s.subscriber_first_name, s.station_id, subscriber_debt, subscriber_intercity_debt, debt_time
                              FROM subscribers s 
                              JOIN subscriber_fees sf ON s.subscriber_id = sf.subscriber_id 
                              GROUP BY s.subscriber_id) j 
                          WHERE j.station_id = ${req.params.station_id} AND debt_time < 3 AND (j.subscriber_debt != 0 OR j.subscriber_intercity_debt != 0);`, (error, results, fields) => {
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

// debtors of district with recent debt
router.get('/new_debtors_by_district/:subscriber_address_district', (req, res, next) => { 
    try {
        connection.query(`SELECT j.subscriber_first_name, j.subscriber_last_name, j.station_id, j.subscriber_address_district 
                          FROM (SELECT s.subscriber_id, s.subscriber_first_name, s.subscriber_last_name, s.station_id, s.subscriber_address_district, subscriber_debt, subscriber_intercity_debt, debt_time
                              FROM subscribers s 
                              JOIN subscriber_fees sf ON s.subscriber_id = sf.subscriber_id 
                              GROUP BY s.subscriber_id) j 
                          WHERE j.subscriber_address_district = '${req.params.subscriber_address_district}' AND debt_time < 3 AND (j.subscriber_debt != 0 OR j.subscriber_intercity_debt != 0);
                          SELECT COUNT(j.subscriber_first_name) 
                          FROM (SELECT s.subscriber_id, s.subscriber_first_name, s.subscriber_last_name, s.station_id, s.subscriber_address_district, subscriber_debt, subscriber_intercity_debt, debt_time
                              FROM subscribers s 
                              JOIN subscriber_fees sf ON s.subscriber_id = sf.subscriber_id 
                              GROUP BY s.subscriber_id) j 
                          WHERE j.subscriber_address_district = '${req.params.subscriber_address_district}' AND debt_time < 3 AND (j.subscriber_debt != 0 OR j.subscriber_intercity_debt != 0);`, (error, results, fields) => {
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