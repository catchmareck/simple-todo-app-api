'use strict';

const mysql = require('../utils/mysql-wrapper');

class TaskList {

    constructor() {}

    create({ list_name }) {

        return Promise.resolve('TODO');
    }

    read({ list_id }) {

        return Promise.resolve('TODO');
    }

    update({ list_id, list_name }) {

        return Promise.resolve('TODO');
    }

    delete({ list_id }) {

        return Promise.resolve('TODO');
    }
}

module.exports = TaskList;
