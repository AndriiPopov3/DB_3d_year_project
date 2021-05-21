const { Router } = require('express');
const routes = require('.');
const connection = require('../app/db.config');
const path = require('path');
const { authenticateJWT } = require('../middlewares/authorization.middleware');

const router = Router();

// get phones by station
router.get('/:station_id', authenticateJWT, (req, res, next) => { 
    try {
        connection.query(`SELECT * FROM public_phones 
                          WHERE station_id = ${req.params.station_id}`, (error, results, fields) => {
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

// get phones by district
router.get('/public_phones_by_district/:public_phone_address_district', authenticateJWT, (req, res, next) => { 
    try {
        connection.query(`SELECT * FROM public_phones 
                          WHERE public_phone_address_district = '${req.params.public_phone_address_district}';
                          SELECT COUNT(public_phone_id) 
                          FROM public_phones 
                          WHERE public_phone_address_district = '${req.params.public_phone_address_district}';`, (error, results, fields) => {
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