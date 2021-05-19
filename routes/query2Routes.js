const { Router } = require('express');
const routes = require('.');
const connection = require('../app/db.config');
const path = require('path');
const e = require('express');

const router = Router();

// are there free phones in the district? Procedure call, returns 0 if false or 1 if true
router.get('/districtAvail/:district_name', (req, res, next) => {
    try {
        console.log('de');
        connection.query(`CALL districtAvail('${req.params.district_name}', @M); SELECT @M`, (error, results, fields) => {
            if(error){
                throw error;
            }
            console.log(results);
            res.json({ query_result: results });
        })
    } catch(err) {
        console.log("error");
        next(err);
    }
}, (req, res, next) => {
   
});

router.get('/:number_availability', (req, res, next) => {
    try {
        connection.query(`SELECT * FROM phone_numbers 
                          WHERE number_availability = ${req.params.number_availability};
                          SELECT COUNT(phone_number) FROM phone_numbers 
                          WHERE number_availability = ${req.params.number_availability};`, (error, results, fields) => {
            res.json({ query_result: results });
        })
    } catch(err) {
        console.log("error");
        next(err);
    }
}, (req, res, next) => {
    
});

router.get('/:station_id/:number_availability', (req, res, next) => {
    try {
        connection.query(`SELECT * FROM phone_numbers 
                          WHERE number_availability=${req.params.number_availability} 
                          AND station_id = ${req.params.station_id};
                          SELECT COUNT(phone_number) FROM phone_numbers 
                          WHERE number_availability = ${req.params.number_availability} 
                          AND station_id = ${req.params.station_id};`, (error, results, fields) => {
            res.json({ query_result: results });
        })
    } catch(err) {
        console.log("error");
        next(err);
    }
}, (req, res, next) => {
    
});

module.exports = router;