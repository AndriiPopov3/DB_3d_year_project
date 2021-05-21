const { Router } = require('express');
const routes = require('.');
const connection = require('../app/db.config');
const path = require('path');
const { authenticateJWT } = require('../middlewares/authorization.middleware');

const router = Router();


router.get('/departmental_intercity/:call_num/:from_date/:to_date', authenticateJWT, (req, res, next) => { 
    try {
        connection.query(`SELECT j.station_id, j.call_number FROM (SELECT station_id, COUNT(*) AS "call_number"
                          FROM departmental_stations_intercity_calls
                          WHERE intercity_call_date BETWEEN '${req.params.from_date}' AND '${req.params.to_date}'
                          GROUP BY station_id 
                          ORDER BY call_number DESC) j WHERE j.call_number < ${req.params.call_num};
                          SELECT COUNT(jp.station_id) FROM (SELECT j.station_id, j.call_number FROM (SELECT station_id, COUNT(*) AS "call_number"
                          FROM departmental_stations_intercity_calls
                          WHERE intercity_call_date BETWEEN '${req.params.from_date}' AND '${req.params.to_date}'
                          GROUP BY station_id 
                          ORDER BY call_number DESC) j WHERE j.call_number < ${req.params.call_num}) jp;`, (error, results, fields) => {
                            if(error){
                                res.json({ message: error });
                            }else{
                                res.json({ query_result: results });
                            }
        
        })
        
    } catch(err) {
        console.log("error");
        next(err);
    }
}, (req, res, next) => {
    
});

router.get('/constituent_intercity/:call_num/:from_date/:to_date', authenticateJWT, (req, res, next) => { 
    try {
        connection.query(`SELECT j.station_id, j.call_number FROM (SELECT station_id, COUNT(*) AS "call_number"
                          FROM constituent_stations_intercity_calls
                          WHERE intercity_call_date BETWEEN '${req.params.from_date}' AND '${req.params.to_date}'
                          GROUP BY station_id 
                          ORDER BY call_number DESC) j WHERE j.call_number < ${req.params.call_num};
                          SELECT COUNT(jp.station_id) FROM (SELECT j.station_id, j.call_number FROM (SELECT station_id, COUNT(*) AS "call_number"
                          FROM constituent_stations_intercity_calls
                          WHERE intercity_call_date BETWEEN '${req.params.from_date}' AND '${req.params.to_date}'
                          GROUP BY station_id 
                          ORDER BY call_number DESC) j WHERE j.call_number < ${req.params.call_num}) jp;`, (error, results, fields) => {
                            if(error){
                                res.json({ message: error });
                            }else{
                                res.json({ query_result: results });
                            }
        
        })
        
    } catch(err) {
        console.log("error");
        next(err);
    }
}, (req, res, next) => {
    
});

module.exports = router;