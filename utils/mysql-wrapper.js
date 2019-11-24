'use strict';

const mysql = require('mysql');

const config = require('../config');
const logger = require('../utils/logger');

class MysqlWrapper {

    constructor() {

        this.pool = mysql.createPool({
            connectionLimit: 20,
            host: config.db.host,
            user: config.db.user,
            password: config.db.password,
            multipleStatements: true
        });
        this.conn = null;
        this.dbName = config.db.name;

        this._bindEvents();
    }

    connect() {

        return new Promise((resolve, reject) => {

            this.pool.getConnection((error, connection) => {

                if (error) return reject(error);

                this.conn = connection;

                logger.debug(`Connected to DB ${this.dbName}`);

                resolve();
            });
        });
    }

    query(...queryParams) {

        const [args] = queryParams;

        logger.debug('Executing query ', args);

        return new Promise((resolve, reject) => {

            this.pool.query(...queryParams, (error, result) => {

                if (error) return reject(error);

                resolve(result);
            });
        });
    }

    _bindEvents() {

        this.pool.on('acquire', (connection) => {

            logger.debug(`Connection acquired. Thread ID: ${connection.threadId}`);
        });

        this.pool.on('connection', (connection) => {

            logger.debug(`DB connection. Thread ID: ${connection.threadId}`);
        });

        this.pool.on('enqueue', () => {

            logger.debug('Connection enqueued. Waiting for available connection slot');
        });

        this.pool.on('release', (connection) => {

            logger.debug(`Connection released. Thread ID: ${connection.threadId}`);
        });
    }
}

module.exports = new MysqlWrapper();