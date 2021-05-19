const { Router } = require('express');
const routes = require('.');
const connection = require('../app/db.config');
const path = require('path');

const router = Router();

// get phones by station
router.get('/intercity/max_city', (req, res, next) => { 
    try {
        connection.query(`SELECT intercity_call_destination, COUNT(*) 
                          FROM intercity_log 
                          GROUP BY intercity_call_destination 
                          ORDER BY COUNT(*) DESC;`, (error, results, fields) => {
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