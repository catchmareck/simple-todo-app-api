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

        const { teamId: team_id } = this.request.params;
        this.model.read({ team_id })
            .then((result) => this.response.send(result))
            .catch(logger.error);
    }

    add() {

        const { teamId: team_id } = this.request.params;
        const {
            listName: list_name
        } = this.request.body;

        this.model.create({
            team_id,
            list_name
        })
            .then((result) => this.response.send(result))
            .catch(logger.error);
    }

    edit() {

        const { id: list_id } = this.request.params;
        const {
            listName: list_name
        } = this.request.body;

        this.model.update({
            list_id,
            list_name
        })
            .then((result) => this.response.send(result))
            .catch(logger.error);
    }

    delete() {

        const { listId: list_id } = this.request.params;

        this.model.delete({ list_id })
            .then((result) => this.response.send(result))
            .catch(logger.error);
    }

    details() {

        const { listId: list_id } = this.request.params;

        this.model.read({ list_id })
            .then((result) => this.response.send(result))
            .catch(logger.error);
    }
}

module.exports = TaskListsController;
