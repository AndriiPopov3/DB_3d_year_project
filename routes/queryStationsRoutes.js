const { Router } = require('express');
const routes = require('.');
const connection = require('../app/db.config');
const { createValidStation, updateValidStation } = require('../middlewares/stations.validation.middleware');
const { authenticateJWT } = require('../middlewares/authorization.middleware');

const router = Router();

// add a new station
router.post('/', authenticateJWT, (req, res, next) => { 
    try {
        const { role } = req.user;
        if (role !== 'admin') {
            return res.status(403).send({
               error: true,
               message: "Forbidden"
            });
       }
        const station_data = {
            station_type: req.body.station_type
        };

          res.data = station_data;

    } catch(err) {
        res.err = err;
    } finally {
        next();
    }
}, createValidStation, (req, res, next) => {
    connection.query(`INSERT INTO stations 
        (station_type) 
        VALUES 
        ('${req.body.station_type}')`, (error, results, fields) => {
            if(error){
                res.json({ message: "Error" });
             }else{
                res.json({ message: "Entry was successfully added" });
             }
        })
});

// update station
router.put('/:station_id', authenticateJWT, async (req, res, next) => { 
    try {
        const { role } = req.user;
        if (role !== 'admin') {
            return res.status(403).send({
               error: true,
               message: "Forbidden"
            });
       }
        const updatedData = {
            station_type: req.body.station_type
        };
        res.data = updatedData;

    } catch(err) {
        res.err = err;
    } finally {
        next();
    }
}, updateValidStation, (req, res, next) => {
    connection.query(`UPDATE stations 
        SET station_type = '${res.data.station_type}'
        WHERE station_id = ${req.params.station_id}`, (error, results, fields) => {
            if(error){
                res.json({ message: "Error" });
             }else{
                res.json({ message: "Entry was successfully edited" });
             }
        })
});

// delete a station
router.delete('/:station_id', authenticateJWT, (req, res, next) => {
    try {
        const { role } = req.user;
        if (role !== 'admin') {
            return res.status(403).send({
               error: true,
               message: "Forbidden"
            });
       }
        connection.query(`DELETE FROM stations WHERE station_id = ${req.params.station_id}`, (error, results, fields) => {
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