'use strict';

const mysql = require('../utils/mysql-wrapper');

class Team {

    constructor() {}

    create({ team_name, team_description }) {

        return Promise.resolve('TODO');
    }

    read({ team_id }) {

        return Promise.resolve('TODO');
    }

    update({ team_id, team_name, team_description }) {

        return Promise.resolve('TODO');
    }

    addMember({ team_id, member_id }) {

        return Promise.resolve('TODO');
    }

    deleteMember({ team_id, member_id }) {

        return Promise.resolve('TODO');
    }
}

module.exports = Team;
