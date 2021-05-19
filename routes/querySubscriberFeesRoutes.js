const { Router } = require('express');
const routes = require('.');
const connection = require('../app/db.config');
const { createValidSubscriberFee, updateValidSubscriberFee } = require('../middlewares/subscriber_fees.validation.middleware');
const { authenticateJWT } = require('../middlewares/authorization.middleware');

const router = Router();

// add a new subscriber fee
router.post('/', authenticateJWT, (req, res, next) => { 
    try {
        const { role } = req.user;
        if (role !== 'admin' && role !== 'manager') {
             return res.status(403).send({
                error: true,
                message: "Forbidden"
             });
        }
        const subscriberFeeData = {
            subscriber_id: req.body.subscriber_id,
            subscriber_access: req.body.subscriber_access,
            subscriber_intercity_access: req.body.subscriber_intercity_access,
            subscriber_fee: req.body.subscriber_fee,
            subscriber_debt: req.body.subscriber_debt,
            subscriber_intercity_debt: req.body.subscriber_intercity_debt,
            debt_time: req.body.debt_time
        };
          res.data = subscriberFeeData;
    } catch(err) {
        res.err = err;
    } finally {
        next();
    }
}, createValidSubscriberFee, (req, res, next) => {
    connection.query(`INSERT INTO subscriber_fees 
        (subscriber_id,
         subscriber_access, 
         subscriber_intercity_access,
         subscriber_fee,
         subscriber_debt,
         subscriber_intercity_debt,
         debt_time) 
        VALUES 
        (${res.data.subscriber_id}, 
         ${res.data.subscriber_access}, 
         ${res.data.subscriber_intercity_access},
         ${res.data.subscriber_fee},
         ${res.data.subscriber_debt},
         ${res.data.subscriber_intercity_debt},
         ${res.data.debt_time})`, (error, results, fields) => {
             if(error){
                throw error;
             }
            res.json({ query_result: results });
        })
});

// update subscriber fee
router.put('/:subscriber_id', authenticateJWT, async (req, res, next) => { 
    try {
        const { role } = req.user;
        if (role !== 'admin' && role !== 'manager') {
             return res.status(403).send({
                error: true,
                message: "Forbidden"
             });
        }
        const updatedData = {
            subscriber_access: req.body.subscriber_access,
            subscriber_intercity_access: req.body.subscriber_intercity_access,
            subscriber_fee: req.body.subscriber_fee,
            subscriber_debt: req.body.subscriber_debt,
            subscriber_intercity_debt: req.body.subscriber_intercity_debt,
            debt_time: req.body.debt_time
        };
          res.data = updatedData;

    } catch(err) {
        res.err = err;
    } finally {
        next();
    }
}, updateValidSubscriberFee, (req, res, next) => {
    connection.query(`UPDATE subscriber_fees 
        SET subscriber_access = ${res.data.subscriber_access},
        subscriber_intercity_access = ${res.data.subscriber_intercity_access},
        subscriber_fee = ${res.data.subscriber_fee},
        subscriber_debt = ${res.data.subscriber_debt},
        subscriber_intercity_debt = ${res.data.subscriber_intercity_debt},
        debt_time = ${res.data.debt_time}
        WHERE subscriber_id = ${req.params.subscriber_id}`, (error, results, fields) => {
            res.json({ query_result: results });
        })
});

// delete a subscriber fee
router.delete('/:subscriber_id', authenticateJWT, (req, res, next) => {
    try {
        const { role } = req.user;
        if (role !== 'admin' && role !== 'manager') {
             return res.status(403).send({
                error: true,
                message: "Forbidden"
             });
        }
        connection.query(`DELETE FROM subscriber_fees WHERE subscriber_id = ${req.params.subscriber_id}`, (error, results, fields) => {
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