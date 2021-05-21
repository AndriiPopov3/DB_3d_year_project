const { Router } = require('express');
const routes = require('.');
const connection = require('../app/db.config');
const { createValidQueueEntry, updateValidNewQueueEntry } = require('../middlewares/QueueEntry.validation.middleware');
const { authenticateJWT } = require('../middlewares/authorization.middleware');
const router = Router();


router.post('/', authenticateJWT, (req, res, next) => { 
    try {
        const QueueEntryData = {
            client_first_name: req.body.client_first_name,
            client_second_name: req.body.client_second_name,
            client_district: req.body.client_district,
            client_street: req.body.client_street,
            client_type: req.body.client_type,
            desired_phone_type: req.body.desired_phone_type
        };
          res.data = QueueEntryData;
    } catch(err) {
        res.err = err;
    } finally {
        next();
    }
}, createValidQueueEntry, (req, res, next) => {
    connection.query(`INSERT INTO queue_entry 
        (client_first_name,
         client_second_name,
         client_district,
         client_street,
         client_type,
         desired_phone_type) 
        VALUES 
        ('${res.data.client_first_name}',
         '${res.data.client_second_name}',
         '${res.data.client_district}',
         '${res.data.client_street}',
         '${res.data.client_type}',
         '${res.data.desired_phone_type}')`, (error, results, fields) => {
             if(error){
                res.json({ message: "Error" });
             }else{
                res.json({ message: "Entry was successfully added" });
             }
            
        })
});

// update
router.put('/:queue_entry_id', authenticateJWT, async (req, res, next) => { 
    try {
        const { role } = req.user;
        if (role !== 'admin' && role !== 'manager') {
             return res.status(403).send({
                error: true,
                message: "Forbidden"
             });
        }
        const updatedQueueEntryData = {
            client_first_name: req.body.client_first_name,
            client_second_name: req.body.client_second_name,
            client_district: req.body.client_district,
            client_street: req.body.client_street,
            client_type: req.body.client_type,
            desired_phone_type: req.body.desired_phone_type
        };
          res.data = updatedQueueEntryData;

    } catch(err) {
        res.err = err;
    } finally {
        next();
    }
}, updateValidNewQueueEntry, (req, res, next) => {
    connection.query(`UPDATE queue_entry 
        SET client_first_name = '${res.data.client_first_name}',
        client_second_name = '${res.data.client_second_name}',
        client_district = '${res.data.client_district}',
        client_street = '${res.data.client_street}',
        client_type = '${res.data.client_type}',
        desired_phone_type = '${res.data.desired_phone_type}'
        WHERE queue_entry_id = ${req.params.queue_entry_id}`, (error, results, fields) => {
            if(error){
                res.json({ message: "Error" });
             }else{
                res.json({ message: "Entry was successfully edited" });
             }
        })
});

// delete an intercity log entry
router.delete('/:queue_entry_id', authenticateJWT, (req, res, next) => {
    try {
        const { role } = req.user;
        if (role !== 'admin' && role !== 'manager') {
             return res.status(403).send({
                error: true,
                message: "Forbidden"
             });
        }
        connection.query(`DELETE FROM queue_entry WHERE queue_entry_id = ${req.params.queue_entry_id}`, (error, results, fields) => {
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