const { Router } = require('express');
const routes = require('.');
const connection = require('../app/db.config');
const path = require('path');
const { authenticateJWT } = require('../middlewares/authorization.middleware');

const router = Router();

// get phones by station
router.get('/procedure/findPhoneByAddress/:subscriber_address_street', authenticateJWT, (req, res, next) => { 
    try {
        connection.query(`CALL findPhoneByAddress('${req.params.subscriber_address_street}', @M); SELECT @M`, (error, results, fields) => {
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
router.get('/phones_by_address/:subscriber_address_street', authenticateJWT, (req, res, next) => { 
    try {
        connection.query(`SELECT COUNT(subscriber_id) 
                          FROM subscribers 
                          WHERE subscriber_address_street = '${req.params.subscriber_address_street}';`, (error, results, fields) => {
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

// get subs with intercity access in building
router.get('/int_phones_by_building/:subscriber_address_street', authenticateJWT, (req, res, next) => { 
    try {
        connection.query(`SELECT COUNT(j.subscriber_first_name) 
                          FROM (SELECT s.subscriber_id, s.subscriber_first_name, s.subscriber_address_street, sf.subscriber_intercity_access 
                                FROM subscribers s 
                                JOIN subscriber_fees sf ON s.subscriber_id = sf.subscriber_id 
                                GROUP BY s.subscriber_id) j 
                          WHERE j.subscriber_address_street = '${req.params.subscriber_address_street}' AND j.subscriber_intercity_access = true;`, (error, results, fields) => {
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

// get subs with intercity access in street
router.get('/int_phones_by_street/:street_name', authenticateJWT, (req, res, next) => { 
    try {
        connection.query(`SELECT COUNT(j.subscriber_first_name) 
                          FROM (SELECT s.subscriber_id, s.subscriber_first_name, s.subscriber_address_street, sf.subscriber_intercity_access 
                                FROM subscribers s 
                                JOIN subscriber_fees sf ON s.subscriber_id = sf.subscriber_id 
                                GROUP BY s.subscriber_id) j 
                          WHERE j.subscriber_address_street  LIKE '%${req.params.street_name}' AND j.subscriber_intercity_access = true;`, (error, results, fields) => {
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