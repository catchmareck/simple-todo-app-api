'use strict';

const { Task } = require('../models');
const logger = require('../utils/logger');

class TasksController {

    constructor(request, response) {

        this.request = request;
        this.response = response;

        this.model = new Task();
    }

    list() {

        this.model.read({})
            .then((result) => this.response.send(result))
            .catch(logger.error);
    }

    add() {

        const {
            listId,
            taskTitle,
            taskDescription,
            isDone,
            taskDeadline,
            assignees
        } = this.request.body;

        this.model.create({
            listId,
            taskTitle,
            taskDescription,
            isDone,
            taskDeadline,
            assignees
        })
            .then((result) => this.response.send(result))
            .catch(logger.error);
    }

    edit() {

        const { id: taskId } = this.request.params;
        const {
            listId,
            taskTitle,
            taskDescription,
            isDone,
            taskDeadline,
            assignees
        } = this.request.body;

        this.model.update({
            taskId,
            listId,
            taskTitle,
            taskDescription,
            isDone,
            taskDeadline,
            assignees
        })
            .then((result) => this.response.send(result))
            .catch(logger.error);
    }

    delete() {

        const { taskId } = this.request.params;

        this.model.delete({ taskId })
            .then((result) => this.response.send(result))
            .catch(logger.error);
    }

    details() {

        const { taskId } = this.request.params;

        this.model.read({ taskId })
            .then((result) => this.response.send(result))
            .catch(logger.error);
    }
}

module.exports = TasksController;
