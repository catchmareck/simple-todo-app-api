'use strict';

const mysql = require('../utils/mysql-wrapper');

class Task {

    constructor() {}

    create({ list_id, task_title, task_description, is_done, task_deadline, assignees }) {

        return Promise.resolve('TODO');
    }

    read({ task_id }) {

        return Promise.resolve('TODO');
    }

    update({ task_id, list_id, task_title, task_description, is_done, task_deadline, assignees }) {

        return Promise.resolve('TODO');
    }

    delete({ task_id }) {

        return Promise.resolve('TODO');
    }
}

module.exports = {
    Task
};
