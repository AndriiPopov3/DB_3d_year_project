const { Router } = require('express');
const routes = require('.');
const connection = require('../app/db.config');
const path = require('path');
const { authenticateJWT } = require('../middlewares/authorization.middleware');

const router = Router();

// get station with highest # of debtors
router.get('/debtors/max_station', authenticateJWT, (req, res, next) => { 
    try {
        connection.query(`SELECT station_id, COUNT(*) 
                          FROM subs_subs_fees_type 
                          GROUP BY station_id 
                          ORDER BY COUNT(*) DESC`, (error, results, fields) => {
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

// get station with highest # of debtors
router.get('/debtors/max_station_desc', authenticateJWT, (req, res, next) => { 
    try {
        connection.query(`SELECT station_id, COUNT(*) AS num_of_debtors
                          FROM subs_subs_fees_type 
                          GROUP BY station_id 
                          ORDER BY num_of_debtors DESC`, (error, results, fields) => {
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

// get station with highest # of debtors
router.get('/debtors/max_station_asc', authenticateJWT, (req, res, next) => { 
    try {
        connection.query(`SELECT station_id, COUNT(*) AS num_of_debtors
                          FROM subs_subs_fees_type 
                          GROUP BY station_id 
                          ORDER BY num_of_debtors ASC`, (error, results, fields) => {
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

// get station by type with highest # of debtors
router.get('/debtors/max_station_desc/:station_type', authenticateJWT, (req, res, next) => { 
    try {
        connection.query(`SELECT station_id, COUNT(*) AS num_of_debtors
                          FROM subs_subs_fees_type 
                          WHERE station_type = "${req.params.station_type}"
                          GROUP BY station_id 
                          ORDER BY num_of_debtors DESC`, (error, results, fields) => {
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

// get station by type with highest # of debtors
router.get('/debtors/max_station_asc/:station_type', authenticateJWT, (req, res, next) => { 
    try {
        connection.query(`SELECT station_id, COUNT(*) AS num_of_debtors
                          FROM subs_subs_fees_type 
                          WHERE station_type = "${req.params.station_type}"
                          GROUP BY station_id 
                          ORDER BY num_of_debtors ASC`, (error, results, fields) => {
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

// get station with highest debt sum
router.get('/debts/max_station', authenticateJWT, (req, res, next) => { 
    try {
        connection.query(`SELECT station_id, SUM(subscriber_debt) + SUM(subscriber_intercity_debt) AS "debt_sum"
                          FROM subs_subs_fees_type 
                          GROUP BY station_id 
                          ORDER BY debt_sum DESC`, (error, results, fields) => {
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

// get station with lowest debt sum
router.get('/debts/min_station', authenticateJWT, (req, res, next) => { 
    try {
        connection.query(`SELECT station_id, SUM(subscriber_debt) + SUM(subscriber_intercity_debt) AS "debt_sum"
                          FROM subs_subs_fees_type 
                          GROUP BY station_id 
                          ORDER BY debt_sum ASC`, (error, results, fields) => {
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

// get station with highest debt sum
router.get('/debts/max_station/:station_type', authenticateJWT, (req, res, next) => { 
    try {
        connection.query(`SELECT station_id, SUM(subscriber_debt) + SUM(subscriber_intercity_debt) AS "debt_sum"
                          FROM subs_subs_fees_type 
                          WHERE station_type = "${req.params.station_type}"
                          GROUP BY station_id 
                          ORDER BY debt_sum DESC`, (error, results, fields) => {
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

// get station with highest debt sum
router.get('/debts/min_station/:station_type', authenticateJWT, (req, res, next) => { 
    try {
        connection.query(`SELECT station_id, SUM(subscriber_debt) + SUM(subscriber_intercity_debt) AS "debt_sum"
                          FROM subs_subs_fees_type 
                          WHERE station_type = "${req.params.station_type}"
                          GROUP BY station_id 
                          ORDER BY debt_sum ASC`, (error, results, fields) => {
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