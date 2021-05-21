const { Router } = require('express');
const routes = require('.');
const connection = require('../app/db.config');
const path = require('path');
const { createValidSubscriber, updateValidSubscriber } = require('../middlewares/subscriber.validation.middleware');
const { authenticateJWT } = require('../middlewares/authorization.middleware');

const router = Router();

// add a new subscriber
router.post('/', authenticateJWT, (req, res, next) => {
    try {
        const { role } = req.user;
        if (role !== 'admin') {
            return res.status(403).send({
               error: true,
               message: "Forbidden"
            });
       }
        const subscriber_data = {
            subscriber_first_name: req.body.subscriber_first_name,
            subscriber_last_name: req.body.subscriber_last_name,
            subscriber_age: req.body.subscriber_age,
            subscriber_gender: req.body.subscriber_gender,
            subscriber_address_index: req.body.subscriber_address_index,
            subscriber_address_district: req.body.subscriber_address_district,
            subscriber_address_street: req.body.subscriber_address_street,
            subscriber_phone: req.body.subscriber_phone,
            subscriber_phone_type: req.body.subscriber_phone_type,
            subscriber_type: req.body.subscriber_type,
            station_id: req.body.station_id
        };
        res.data = subscriber_data;
    } catch(err) {
        res.err = err;
    } finally {
        next();
    }
}, createValidSubscriber, (req, res, next) => {
    connection.query(`INSERT INTO subscribers 
        (subscriber_first_name, 
        subscriber_last_name, 
        subscriber_age, 
        subscriber_gender, 
        subscriber_address_index, 
        subscriber_address_district, 
        subscriber_address_street, 
        subscriber_phone, 
        subscriber_phone_type, 
        subscriber_type, 
        station_id) 
        VALUES 
        ('${res.data.subscriber_first_name}', 
         '${res.data.subscriber_last_name}', 
         ${res.data.subscriber_age}, 
         '${res.data.subscriber_gender}', 
         '${res.data.subscriber_address_index}', 
         '${res.data.subscriber_address_district}', 
         '${res.data.subscriber_address_street}', 
         '${res.data.subscriber_phone}', 
         '${res.data.subscriber_phone_type}',
         '${res.data.subscriber_type}', 
         ${res.data.station_id})`, (error, results, fields) => {
            if(error){
                res.json({ message: error });
             }else{
                res.json({ message: "Entry was successfully added" });
             }
        })
});

// delete a subscriber
router.delete('/:subscriber_id', authenticateJWT, (req, res, next) => { 
    try {
        const { role } = req.user;
        if (role !== 'admin') {
            return res.status(403).send({
               error: true,
               message: "Forbidden"
            });
       }
        connection.query(`DELETE FROM subscribers WHERE subscriber_id = ${req.params.subscriber_id}`, (error, results, fields) => {
            if(error){
                res.json({ message: error });
             }else{
                res.json({ message: "Entry was successfully edited" });
             }
        })
    } catch(err) {
        console.log("error");
        next(err);
    }
});

// update a subscriber
router.put('/:subscriber_id', authenticateJWT, (req, res, next) => { 
    try {
        const { role } = req.user;
        if (role !== 'admin') {
            return res.status(403).send({
               error: true,
               message: "Forbidden"
            });
       }
        const subscriber_data = {
            subscriber_first_name: req.body.subscriber_first_name,
            subscriber_last_name: req.body.subscriber_last_name,
            subscriber_age: req.body.subscriber_age,
            subscriber_gender: req.body.subscriber_gender,
            subscriber_address_index: req.body.subscriber_address_index,
            subscriber_address_district: req.body.subscriber_address_district,
            subscriber_address_street: req.body.subscriber_address_street,
            subscriber_phone: req.body.subscriber_phone,
            subscriber_phone_type: req.body.subscriber_phone_type,
            subscriber_type: req.body.subscriber_type,
            station_id: req.body.station_id
        };
        res.data = subscriber_data;
    } catch(err) {
        next(err);
    }
    finally {
        next();
    }
}, updateValidSubscriber, (req, res, next) => {
    connection.query(`UPDATE subscribers 
                          SET subscriber_first_name = '${res.data.subscriber_first_name}',
                          subscriber_last_name = '${res.data.subscriber_last_name}',
                          subscriber_age = ${res.data.subscriber_age},
                          subscriber_gender = '${res.data.subscriber_gender}',
                          subscriber_address_index = '${res.data.subscriber_address_index}',
                          subscriber_address_district = '${res.data.subscriber_address_district}',
                          subscriber_address_street = '${res.data.subscriber_address_street}',
                          subscriber_phone = '${res.data.subscriber_phone}',
                          subscriber_phone_type = '${res.data.subscriber_phone_type}',
                          subscriber_type = '${res.data.subscriber_type}',
                          station_id = ${res.data.station_id}
                          WHERE subscriber_id = ${req.params.subscriber_id}`, (error, results, fields) => {
                            if(error){
                                res.json({ message: error });
                             }else{
                                res.json({ message: "Entry was successfully deleted" });
                             }
        })
});

module.exports = router;