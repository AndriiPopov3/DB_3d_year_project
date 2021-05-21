const { Router } = require('express');
const routes = require('.');
const connection = require('../app/db.config');
const path = require('path');
const { authenticateJWT } = require('../middlewares/authorization.middleware');

const router = Router();

// get phones by station
router.get('/parallel_avail_replace', authenticateJWT, (req, res, next) => { 
    try {
        connection.query(`SELECT * FROM parallel_phone_numbers;`, (error, results, fields) => {
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