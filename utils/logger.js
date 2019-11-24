'use strict';

const winston = require('winston');
const { logLevel } = require('../config');

const logger = winston.createLogger({
    level: logLevel,
    format: winston.format.simple(),
    transports: [
        new winston.transports.Console()
    ]
});

module.exports = logger;
