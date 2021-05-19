const { Router } = require('express');
const routes = require('.');
const connection = require('../app/db.config');
const path = require('path');
const e = require('express');
const { createValidPhone, updateValidPhone } = require('../middlewares/phone_number.validation.middleware');

const router = Router();

// add a new phone number
router.post('/', async (req, res, next) => { 
    try {
        const phone_data = {
            station_id: req.body.station_id,
            phone_number: req.body.phone_number,
            number_availability: req.body.number_availability
        };
        // TODO: add station_id validation

          res.data = phone_data;

    } catch(err) {
        res.err = err;
    } finally {
        next();
    }
}, createValidPhone, (req, res, next) => {
    connection.query(`INSERT INTO phone_numbers 
        (station_id, 
        phone_number, 
        number_availability) 
        VALUES 
        (${req.body.station_id}, 
         '${req.body.phone_number}', 
         ${req.body.number_availability})`, (error, results, fields) => {
            //  if(error){
            //     throw error;
            //  }
            res.json({ query_result: results });
        })
});

// update a phone number
router.put('/:phone_number_id', async (req, res, next) => { 
    try {
        const updatedData = {
            station_id: req.body.station_id,
            phone_number: req.body.phone_number,
            number_availability: req.body.number_availability
        };
        res.data = updatedData;
          // TODO: add station_id validation
    } catch(err) {
        res.err = err;
    } finally {
        next();
    }
}, updateValidPhone, (req, res, next) => {
    connection.query(`UPDATE phone_numbers 
        SET station_id = ${req.body.station_id},
        phone_number = ${req.body.phone_number},
        number_availability = ${req.body.number_availability}
        WHERE phone_number_id = ${req.params.phone_number_id}`, (error, results, fields) => {
            res.json({ query_result: results });
        })
});

// delete a phone number
router.delete('/:phone_number_id', (req, res, next) => {
    try {
        connection.query(`DELETE FROM phone_numbers WHERE phone_number_id = ${req.params.phone_number_id}`, (error, results, fields) => {
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