const { Router } = require('express');
const routes = require('.');
const main = require('../app/db.config');
const path = require('path');

const router = Router();

router.get('/', (req, res, next) => {
    try {
        res.sendFile(path.join(__dirname, '../templates', 'mainPage.html'));
    } catch(err) {
        console.log("error");
        next(err);
    }
}, (req, res, next) => {
    
});




module.exports = router;