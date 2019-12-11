'use strict';

const { Team } = require('../models');
const logger = require('../utils/logger');

class TeamsController {

    constructor(request, response) {

        this.request = request;
        this.response = response;

        this.model = new Team();
    }

    add() {

        const {
            teamName,
            teamDescription
        } = this.request.body;

        this.model.create({
            teamName,
            teamDescription
        })
            .then((result) => this.response.send(result))
            .catch(logger.error);
    }

    edit() {

        const { id: teamId } = this.request.params;
        const {
            teamName,
            teamDescription
        } = this.request.body;

        this.model.update({
            teamId,
            teamName,
            teamDescription
        })
            .then((result) => this.response.send(result))
            .catch(logger.error);
    }

    details() {

        const { teamId } = this.request.params;

        this.model.read({ teamId })
            .then((result) => this.response.send(result))
            .catch(logger.error);
    }

    addMember() {

        const { teamId, memberId } = this.request.params;

        this.model.addMember({
            teamId,
            memberId
        })
            .then((result) => this.response.send(result))
            .catch(logger.error);
    }

    deleteMember() {

        const { teamId, memberId } = this.request.params;

        this.model.deleteMember({
            teamId,
            memberId
        })
            .then((result) => this.response.send(result))
            .catch(logger.error);
    }
}

module.exports = TeamsController;