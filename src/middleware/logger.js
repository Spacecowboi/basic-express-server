'use strict';

module.exports = (req, res, next) => {
    console.log(`Received ${req.method} request for ${req.path}`);
    next();
};