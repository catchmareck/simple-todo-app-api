'use strict';

const Sequelize = require('sequelize');
const sequelize = require('./db');

const Model = Sequelize.Model;

class Team extends Model {

    create({ team_name, team_description }) {

        return Team.create({ team_name, team_description });
    }

    read({ team_id }) {

        return Team.findOne({ where: { team_id } });
    }

    update({ team_id, team_name, team_description }) {

        return Team.update({ team_name, team_description }, { where: { team_id }});
    }

    addMember({ team_id, member_id }) {

        return Team.findOne({ where: { team_id }}).addUser(member_id);
    }

    deleteMember({ team_id, member_id }) {

        return Team.findOne({ where: { team_id }}).removeUser(member_id);
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
