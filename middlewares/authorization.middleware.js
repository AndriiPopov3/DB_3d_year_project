const jwt = require('jsonwebtoken');
const accessTokenSecret = require('../app/auth.token');

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, accessTokenSecret, (err, user) => {
            if (err) {
                return res.status(403).send({
                    error: true,
                    message: "Forbidden"
                 });
            }

            req.user = user;
            next();
        });
    } else {
        return res.status(401).send({
            error: true,
            message: "Unauthorized"
         });
    }
};

exports.authenticateJWT = authenticateJWT;