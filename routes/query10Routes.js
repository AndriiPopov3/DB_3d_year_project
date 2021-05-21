const { Router } = require('express');
const routes = require('.');
const connection = require('../app/db.config');
const path = require('path');
const { authenticateJWT } = require('../middlewares/authorization.middleware');

const router = Router();

// get phones by station
router.get('/subscribers/:subscriber_phone', authenticateJWT, (req, res, next) => { 
    try {
        connection.query(`SELECT * FROM subscribers WHERE subscriber_phone = '${req.params.subscriber_phone}';
        SELECT * FROM subscriber_fees WHERE subscriber_id IN (SELECT subscriber_id FROM subscribers WHERE subscriber_phone = '${req.params.subscriber_phone}');`, (error, results, fields) => {
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