const { Router } = require('express');
const routes = require('.');
const connection = require('../app/db.config');
const { updateUserRoleEntry } = require('../middlewares/userRole.validation.middleware');
const { authenticateJWT } = require('../middlewares/authorization.middleware');
const router = Router();

// update intercity log entry
router.put('/:user_id', authenticateJWT, async (req, res, next) => { 
    try {
        const { role } = req.user;
        if (role !== 'admin') {
             return res.status(403).send({
                error: true,
                message: "Forbidden"
             });
        }
        const newRole = {
            user_role: req.body.user_role
        };
          res.data = newRole;

    } catch(err) {
        res.err = err;
    } finally {
        next();
    }
}, updateUserRoleEntry, (req, res, next) => {
    connection.query(`UPDATE user_list 
        SET user_role = '${res.data.user_role}'
        WHERE user_id = ${req.params.user_id}`, (error, results, fields) => {
            if(error){
                res.json({ message: "Error" });
             }else{
                res.json({ message: "Entry was successfully edited" });
             }
        })
});

// delete an intercity log entry
router.delete('/:user_id', authenticateJWT, (req, res, next) => {
    try {
        const { role } = req.user;
        if (role !== 'admin') {
             return res.status(403).send({
                error: true,
                message: "Forbidden"
             });
        }
        connection.query(`DELETE FROM user_list WHERE user_id = ${req.params.user_id}`, (error, results, fields) => {
            if(error){
                res.json({ message: "Error" });
             }else{
                res.json({ message: "Entry was successfully deleted" });
             }
        })
    } catch(err) {
        console.log("error");
        next(err);
    }
});

module.exports = router;