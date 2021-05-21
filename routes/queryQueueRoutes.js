const { Router } = require('express');
const routes = require('.');
const connection = require('../app/db.config');
const { createValidQueue, updateValidQueue } = require('../middlewares/queue.validation.middleware');
const { authenticateJWT } = require('../middlewares/authorization.middleware');
const router = Router();

// add 
router.post('/', authenticateJWT, (req, res, next) => { 
    try {
        const { role } = req.user;
        if (role !== 'admin' && role !== 'manager') {
            return res.status(403).send({
               error: true,
               message: "Forbidden"
            });
       }
       const newQueueEntryData = {
        queue_entry_id: req.body.queue_entry_id,
        queue_type: req.body.queue_type,
        client_first_name: req.body.client_first_name,
        client_second_name: req.body.client_second_name,
        client_district: req.body.client_district,
        client_street: req.body.client_street,
        client_type: req.body.client_type,
        desired_phone_type: req.body.desired_phone_type,
        station_id: req.body.station_id,
        availability: req.body.availability
    };
      res.data = newQueueEntryData;

    } catch(err) {
        res.err = err;
    } finally {
        next();
    }
}, createValidQueue, (req, res, next) => {
    connection.query(`INSERT INTO queue 
    (queue_entry_id,
     queue_type, 
     client_first_name,
     client_second_name,
     client_district,
     client_street,
     client_type,
     desired_phone_type,
     station_id,
     availability) 
    VALUES 
    (${res.data.queue_entry_id}, 
     '${res.data.queue_type}', 
     '${res.data.client_first_name}',
     '${res.data.client_second_name}',
     '${res.data.client_district}',
     '${res.data.client_street}',
     '${res.data.client_type}',
     '${res.data.desired_phone_type}',
     ${res.data.station_id},
     ${res.data.availability})`, (error, results, fields) => {
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
            queue_type: req.body.queue_type,
            client_first_name: req.body.client_first_name,
            client_second_name: req.body.client_second_name,
            client_district: req.body.client_district,
            client_street: req.body.client_street,
            client_type: req.body.client_type,
            desired_phone_type: req.body.desired_phone_type,
            station_id: req.body.station_id,
            availability: req.body.availability
        };
          res.data = updatedQueueEntryData;

    } catch(err) {
        res.err = err;
    } finally {
        next();
    }
}, updateValidQueue, (req, res, next) => {
    connection.query(`UPDATE queue 
        SET queue_type = '${res.data.queue_type}',
        client_first_name = '${res.data.client_first_name}',
        client_second_name = '${res.data.client_second_name}',
        client_district = '${res.data.client_district}',
        client_street = '${res.data.client_street}',
        client_type = '${res.data.client_type}',
        desired_phone_type = '${res.data.desired_phone_type}',
        station_id = ${res.data.station_id},
        availability = ${res.data.availability}
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
        connection.query(`DELETE FROM queue WHERE queue_entry_id = ${req.params.queue_entry_id}`, (error, results, fields) => {
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