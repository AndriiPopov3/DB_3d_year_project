const { Router } = require('express');
const routes = require('.');
const connection = require('../app/db.config');
const path = require('path');
const e = require('express');
const { createValidPhone, updateValidPhone } = require('../middlewares/phone_number.validation.middleware');
const { authenticateJWT } = require('../middlewares/authorization.middleware');

const router = Router();

// add a new phone number
router.post('/', authenticateJWT, (req, res, next) => { 
    try {
        const { role } = req.user;
        if (role !== 'admin' && role !== 'manager') {
             return res.status(403).send({
                error: true,
                message: "Forbidden"
             });
        }
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
            if(error){
                res.json({ message: "Error" });
             }else{
                res.json({ message: "Entry was successfully added" });
             }
        })
});

// update a phone number
router.put('/:phone_number_id', authenticateJWT, (req, res, next) => { 
    try {
        const { role } = req.user;
        if (role !== 'admin' && role !== 'manager') {
             return res.status(403).send({
                error: true,
                message: "Forbidden"
             });
        }
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
            if(error){
                res.json({ message: "Error" });
             }else{
                res.json({ message: "Entry was successfully edited" });
             }
        })
});

// delete a phone number
router.delete('/:phone_number_id', authenticateJWT, (req, res, next) => {
    try {
        const { role } = req.user;
        if (role !== 'admin' && role !== 'manager') {
             return res.status(403).send({
                error: true,
                message: "Forbidden"
             });
        }
        connection.query(`DELETE FROM phone_numbers WHERE phone_number_id = ${req.params.phone_number_id}`, (error, results, fields) => {
            if(error){
                res.json({ message: "Error" });
             }else{
                res.json({ message: "Entry was successfully deleted" });
             }
        })
    } catch(err) {
        console.log("error");
        next(err);
    }
});

module.exports = router;