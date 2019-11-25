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
            listId: list_id,
            taskTitle: task_title,
            taskDescription: task_description,
            isDone: is_done,
            taskDeadline: task_deadline,
            assignees
        } = this.request.body;

        this.model.create({
            list_id,
            task_title,
            task_description,
            is_done,
            task_deadline,
            assignees
        })
            .then((result) => this.response.send(result))
            .catch(logger.error);
    }

    edit() {

        const { id: task_id } = this.request.params;
        const {
            listId: list_id,
            taskTitle: task_title,
            taskDescription: task_description,
            isDone: is_done,
            taskDeadline: task_deadline,
            assignees
        } = this.request.body;

        this.model.update({
            task_id,
            list_id,
            task_title,
            task_description,
            is_done,
            task_deadline,
            assignees
        })
            .then((result) => this.response.send(result))
            .catch(logger.error);
    }

    delete() {

        const { taskId: task_id } = this.request.params;

        this.model.delete({ task_id })
            .then((result) => this.response.send(result))
            .catch(logger.error);
    }

    details() {

        const { taskId: task_id } = this.request.params;

        this.model.read({ task_id })
            .then((result) => this.response.send(result))
            .catch(logger.error);
    }
}

module.exports = TasksController;
