const { Router } = require('express');
const routes = require('.');
const connection = require('../app/db.config');
const path = require('path');

const router = Router();


// get debt subs by station_id
router.get('/debtors/:station_id', (req, res, next) => { 
    try {
        connection.query(`SELECT * FROM subscribers 
                          WHERE station_id=${req.params.station_id} 
                          AND subscriber_id IN (SELECT subscriber_id 
                                                FROM subscriber_fees 
                                                WHERE subscriber_debt != 0 
                                                OR subscriber_intercity_debt != 0);
                          SELECT COUNT(subscriber_id) FROM subscribers 
                          WHERE station_id = ${req.params.station_id} 
                          AND subscriber_id IN (SELECT subscriber_id 
                                                FROM subscriber_fees 
                                                WHERE subscriber_debt != 0 
                                                OR subscriber_intercity_debt != 0);
                                                `, (error, results, fields) => {
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

// get all debtors
router.get('/debtors', (req, res, next) => { 
    try {
        connection.query(`SELECT * FROM subscribers 
                          WHERE subscriber_id IN (SELECT subscriber_id 
                                                FROM subscriber_fees 
                                                WHERE subscriber_debt != 0 
                                                OR subscriber_intercity_debt != 0);
                          SELECT COUNT(subscriber_id) FROM subscribers 
                          WHERE subscriber_id IN (SELECT subscriber_id 
                                                  FROM subscriber_fees 
                                                  WHERE subscriber_debt != 0 
                                                  OR subscriber_intercity_debt != 0);
                                                `, (error, results, fields) => {
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

// get debt subs by district
router.get('/debtors_by_district/:subscriber_address_district', (req, res, next) => { 
    try {
        connection.query(`SELECT * FROM subscribers 
                          WHERE subscriber_address_district = '${req.params.subscriber_address_district}' 
                          AND subscriber_id IN (SELECT subscriber_id 
                                                FROM subscriber_fees 
                                                WHERE subscriber_debt != 0 
                                                OR subscriber_intercity_debt != 0);
                          SELECT COUNT(subscriber_id) FROM subscribers 
                          WHERE subscriber_address_district = '${req.params.subscriber_address_district}' 
                          AND subscriber_id IN (SELECT subscriber_id 
                                                FROM subscriber_fees 
                                                WHERE subscriber_debt != 0 
                                                OR subscriber_intercity_debt != 0);`, (error, results, fields) => {
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

// get subs with standard debt
router.get('/debtors_std', (req, res, next) => { 
    try {
        connection.query(`SELECT * FROM subscribers 
                          WHERE subscriber_id IN (SELECT subscriber_id 
                                                  FROM subscriber_fees 
                                                  WHERE subscriber_debt != 0);
                          SELECT COUNT(subscriber_id) FROM subscribers 
                          WHERE subscriber_id IN (SELECT subscriber_id 
                                                  FROM subscriber_fees 
                                                  WHERE subscriber_debt != 0);`, (error, results, fields) => {
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

// get subs with intercity debt
router.get('/debtors_itc', (req, res, next) => { 
    try {
        connection.query(`SELECT * FROM subscribers 
                          WHERE subscriber_id IN (SELECT subscriber_id 
                                                  FROM subscriber_fees 
                                                  WHERE subscriber_intercity_debt != 0);
                          SELECT COUNT(subscriber_id) FROM subscribers 
                          WHERE subscriber_id IN (SELECT subscriber_id 
                                                  FROM subscriber_fees 
                                                  WHERE subscriber_intercity_debt != 0);`, (error, results, fields) => {
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

// get subs with specific debt amount
router.get('/debtors/:debt_min/:debt_max', (req, res, next) => { 
    try {
        connection.query(`SELECT * FROM subscribers 
                          WHERE subscriber_id IN (SELECT subscriber_id 
                                                  FROM subscriber_fees 
                                                  WHERE subscriber_debt BETWEEN ${req.params.debt_min} AND ${req.params.debt_max});
                          SELECT COUNT(subscriber_id) FROM subscribers 
                          WHERE subscriber_id IN (SELECT subscriber_id 
                                                  FROM subscriber_fees 
                                                  WHERE subscriber_debt BETWEEN ${req.params.debt_min} AND ${req.params.debt_max});`, (error, results, fields) => {
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

// get subs with specific debt amount
router.get('/debtors_by_time/:debt_time_min', (req, res, next) => { 
    try {
        connection.query(`SELECT * FROM subscribers 
                          WHERE subscriber_id IN (SELECT subscriber_id 
                                                  FROM subscriber_fees 
                                                  WHERE debt_time > ${req.params.debt_time_min});
                          SELECT COUNT(subscriber_id) FROM subscribers 
                          WHERE subscriber_id IN (SELECT subscriber_id 
                                                  FROM subscriber_fees 
                                                  WHERE debt_time > ${req.params.debt_time_min});`, (error, results, fields) => {
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