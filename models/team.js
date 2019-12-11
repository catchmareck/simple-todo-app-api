'use strict';

const Sequelize = require('sequelize');
const sequelize = require('./db');

const Model = Sequelize.Model;

class Team extends Model {

    create({ teamName, teamDescription }) {

        return Team.create({ teamName, teamDescription });
    }

    read({ team_id }) {

        return Team.findOne({ where: { team_id } });
    }

    update({ teamId, teamName, teamDescription }) {

        return Team.update({ teamName, teamDescription }, { where: { teamId }});
    }

    addMember({ teamId, memberId }) {

        return Team.findOne({ where: { teamId }}).addUser(memberId);
    }

    deleteMember({ teamId, memberId }) {

        return Team.findOne({ where: { teamId }}).removeUser(memberId);
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
