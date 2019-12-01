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
            teamName: team_name,
            teamDescription: team_description
        } = this.request.body;

        this.model.create({
            team_name,
            team_description
        })
            .then((result) => this.response.send(result))
            .catch(logger.error);
    }

    edit() {

        const { id: team_id } = this.request.params;
        const {
            teamName: team_name,
            teamDescription: team_description
        } = this.request.body;

        this.model.update({
            team_id,
            team_name,
            team_description
        })
            .then((result) => this.response.send(result))
            .catch(logger.error);
    }

    details() {

        const { teamId: team_id } = this.request.params;

        this.model.read({ team_id })
            .then((result) => this.response.send(result))
            .catch(logger.error);
    }

    addMember() {

        const { teamId: team_id, memberId: member_id } = this.request.params;

        this.model.addMember({
            team_id,
            member_id
        })
            .then((result) => this.response.send(result))
            .catch(logger.error);
    }

    deleteMember() {

        const { teamId: team_id, memberId: member_id } = this.request.params;

        this.model.deleteMember({
            team_id,
            member_id
        })
            .then((result) => this.response.send(result))
            .catch(logger.error);
    }
}

module.exports = TeamsController;