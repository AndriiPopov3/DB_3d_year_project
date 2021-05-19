const { Router } = require('express');
const routes = require('.');
const connection = require('../app/db.config');
const { createValidPublicPhone, updateValidPublicPhone } = require('../middlewares/public_phones.validation.middleware');
const { authenticateJWT } = require('../middlewares/authorization.middleware');

const router = Router();

// add a new public phone
router.post('/', authenticateJWT, (req, res, next) => { 
    try {
        const { role } = req.user;
        if (role !== 'admin') {
            return res.status(403).send({
               error: true,
               message: "Forbidden"
            });
       }
        const publicPhoneData = {
            public_phone_type: req.body.public_phone_type,
            station_id: req.body.station_id,
            public_phone_address_district: req.body.public_phone_address_district,
            public_phone_address_street: req.body.public_phone_address_street
        };

          res.data = publicPhoneData;

    } catch(err) {
        res.err = err;
    } finally {
        next();
    }
}, createValidPublicPhone, (req, res, next) => {
    connection.query(`INSERT INTO public_phones 
        (public_phone_type, 
         station_id,
         public_phone_address_district,
         public_phone_address_street) 
        VALUES 
        ('${req.body.public_phone_type}', 
         ${req.body.station_id},
         '${req.body.public_phone_address_district}',
         '${req.body.public_phone_address_street}')`, (error, results, fields) => {
            //  if(error){
            //     throw error;
            //  }
            res.json({ query_result: results });
        })
});

// update public phone
router.put('/:public_phone_id', authenticateJWT, async (req, res, next) => { 
    try {
        const { role } = req.user;
        if (role !== 'admin') {
            return res.status(403).send({
               error: true,
               message: "Forbidden"
            });
       }
        const updatedData = {
            public_phone_type: req.body.public_phone_type,
            station_id: req.body.station_id,
            public_phone_address_district: req.body.public_phone_address_district,
            public_phone_address_street: req.body.public_phone_address_street
        };

          res.data = updatedData;

    } catch(err) {
        res.err = err;
    } finally {
        next();
    }
}, updateValidPublicPhone, (req, res, next) => {
    connection.query(`UPDATE public_phones 
        SET public_phone_type = '${res.data.public_phone_type}',
        station_id = ${res.data.station_id},
        public_phone_address_district = '${res.data.public_phone_address_district}',
        public_phone_address_street = '${res.data.public_phone_address_street}'
        WHERE public_phone_id = ${req.params.public_phone_id}`, (error, results, fields) => {
            res.json({ query_result: results });
        })
});

// delete a public phone
router.delete('/:public_phone_id', authenticateJWT, (req, res, next) => {
    try {
        const { role } = req.user;
        if (role !== 'admin') {
            return res.status(403).send({
               error: true,
               message: "Forbidden"
            });
       }
        connection.query(`DELETE FROM public_phones WHERE public_phone_id = ${req.params.public_phone_id}`, (error, results, fields) => {
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