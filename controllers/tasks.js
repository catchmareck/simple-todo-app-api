'use strict';

const { Task } = require('../models');

class TasksController {

    constructor(request, response) {

        this.request = request;
        this.response = response;

        this.model = new Task();
    }

    create() {
        // TODO
    }

    read() {
        // TODO
    }

    update() {
        // TODO
    }

    delete() {
        // TODO
    }
}

module.exports = TasksController;
