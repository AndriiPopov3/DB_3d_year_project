const { Router } = require('express');
const routes = require('.');
const connection = require('../app/db.config');
const path = require('path');
const e = require('express');
const { authenticateJWT } = require('../middlewares/authorization.middleware');

const router = Router();

// are there free phones in the district? Procedure call, returns 0 if false or 1 if true
router.get('/districtAvail/:district_name', authenticateJWT, (req, res, next) => {
    try {
        connection.query(`CALL districtAvail('${req.params.district_name}', @M); SELECT @M`, (error, results, fields) => {
            if(error){
                throw error;
            }
            res.json({ query_result: results });
        })
    } catch(err) {
        console.log("error");
        next(err);
    }
});

router.get('/:number_availability', authenticateJWT, (req, res, next) => {
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
});

router.get('/:station_id/:number_availability', authenticateJWT, (req, res, next) => {
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
});

module.exports = router;