'use strict';

const {
    NODE_ENV: env,
    PORT: port,
    LOG_LEVEL: logLevel,
    DB_HOST: host,
    DB_NAME: name,
    DB_USER: user,
    DB_PASSWORD: password
} = process.env;

module.exports = {
    env,
    port,
    logLevel,
    db: {
        host,
        name,
        user,
        password
    }
};
