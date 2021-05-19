const { Router } = require('express');
const routes = require('.');
const connection = require('../app/db.config');
const { createValidStation, updateValidStation } = require('../middlewares/stations.validation.middleware');

const router = Router();

// add a new station
router.post('/', (req, res, next) => { 
    try {
        const station_data = {
            station_id: req.body.station_id,
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
        (station_id, 
        station_type) 
        VALUES 
        (${req.body.station_id}, 
         '${req.body.station_type}')`, (error, results, fields) => {
            //  if(error){
            //     throw error;
            //  }
            res.json({ query_result: results });
        })
});

// update station
router.put('/:station_id', async (req, res, next) => { 
    try {
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
    console.log(res.data.station_type, req.params.station_id);
    connection.query(`UPDATE stations 
        SET station_type = '${res.data.station_type}'
        WHERE station_id = ${req.params.station_id}`, (error, results, fields) => {
            res.json({ query_result: results });
        })
});

// delete a station
router.delete('/:station_id', (req, res, next) => {
    try {
        connection.query(`DELETE FROM stations WHERE station_id = ${req.params.station_id}`, (error, results, fields) => {
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