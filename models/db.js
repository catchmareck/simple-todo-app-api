'use strict';

const Sequelize = require('sequelize');

const { db: { user, host, name, password } } = require('../config');

const sequelize = new Sequelize(`mysql://${user}:${password}@${host}:3306/${name}`, {
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = sequelize;
