'use strict';

const { TaskList } = require('../models');
const logger = require('../utils/logger');

class TaskListsController {

    constructor(request, response) {

        this.request = request;
        this.response = response;

        this.model = new TaskList();
    }

    list() {

        const { teamId } = this.request.params;
        this.model.read({ teamId })
            .then((result) => this.response.send(result))
            .catch(logger.error);
    }

    add() {

        const { teamId } = this.request.params;
        const { listName } = this.request.body;

        this.model.create({
            teamId,
            listName
        })
            .then((result) => this.response.send(result))
            .catch(logger.error);
    }

    edit() {

        const { id: listId } = this.request.params;
        const { listName } = this.request.body;

        this.model.update({
            listId,
            listName
        })
            .then((result) => this.response.send(result))
            .catch(logger.error);
    }

    delete() {

        const { id: listId } = this.request.params;

        this.model.delete({ listId })
            .then(() => this.response.send(200))
            .catch(logger.error);
    }

    details() {

        const { id: listId } = this.request.params;

        this.model.read({ listId })
            .then((result) => this.response.send(result))
            .catch(logger.error);
    }
}

module.exports = TaskListsController;
