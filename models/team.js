'use strict';

const Sequelize = require('sequelize');
const sequelize = require('./db');

const Model = Sequelize.Model;

class Team extends Model {

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

Team.init({
    teamId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    teamName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            max: 255
        }
    },
    teamDescription: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            max: 255
        }
    }
}, {
    sequelize,
    modelName: 'team',
    underscored: true
});

module.exports = Team;
