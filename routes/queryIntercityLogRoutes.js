const { Router } = require('express');
const routes = require('.');
const connection = require('../app/db.config');
const { createValidIntercityLogEntry, updateValidIntercityLogEntry } = require('../middlewares/intercity_log.validation.middleware');

const router = Router();

// add a new intercity log entry
router.post('/', (req, res, next) => { 
    try {
        const intercityLogEntryData = {
            intercity_call_date: req.body.intercity_call_date,
            subscriber_id: req.body.subscriber_id,
            station_id: req.body.station_id,
            intercity_call_destination: req.body.intercity_call_destination
        };
          res.data = intercityLogEntryData;
    } catch(err) {
        res.err = err;
    } finally {
        next();
    }
}, createValidIntercityLogEntry, (req, res, next) => {
    connection.query(`INSERT INTO intercity_log 
        (intercity_call_date, 
         subscriber_id,
         station_id,
         intercity_call_destination) 
        VALUES 
        ('${req.body.intercity_call_date}', 
         ${req.body.subscriber_id},
         ${req.body.station_id},
         '${req.body.intercity_call_destination}')`, (error, results, fields) => {
            //  if(error){
            //     throw error;
            //  }
            res.json({ query_result: results });
        })
});

// update intercity log entry
router.put('/:intercity_call_id', async (req, res, next) => { 
    try {
        const updatedData = {
            intercity_call_date: req.body.intercity_call_date,
            subscriber_id: req.body.subscriber_id,
            station_id: req.body.station_id,
            intercity_call_destination: req.body.intercity_call_destination
        };
          res.data = updatedData;

    } catch(err) {
        res.err = err;
    } finally {
        next();
    }
}, updateValidIntercityLogEntry, (req, res, next) => {
    connection.query(`UPDATE intercity_log 
        SET intercity_call_date = '${res.data.intercity_call_date}',
        subscriber_id = ${res.data.subscriber_id},
        station_id = ${res.data.station_id},
        intercity_call_destination = '${res.data.intercity_call_destination}'
        WHERE intercity_call_id = ${req.params.intercity_call_id}`, (error, results, fields) => {
            res.json({ query_result: results });
        })
});

// delete an intercity log entry
router.delete('/:intercity_call_id', (req, res, next) => {
    try {
        connection.query(`DELETE FROM intercity_log WHERE intercity_call_id = ${req.params.intercity_call_id}`, (error, results, fields) => {
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