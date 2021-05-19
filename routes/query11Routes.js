const { Router } = require('express');
const routes = require('.');
const connection = require('../app/db.config');
const path = require('path');

const router = Router();

// get phones by station
router.get('/parallel_avail_replace', (req, res, next) => { 
    try {
        connection.query(`SELECT * FROM parallel_phone_numbers;`, (error, results, fields) => {
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