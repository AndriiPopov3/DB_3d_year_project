const accessTokenSecret = require('crypto').randomBytes(64).toString('hex');

module.exports = accessTokenSecret;