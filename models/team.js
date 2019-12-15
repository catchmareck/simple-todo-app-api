'use strict';

const Sequelize = require('sequelize');
const sequelize = require('./db');

const Model = Sequelize.Model;

class Team extends Model {

    create({ teamName, teamDescription, adminId }) {

        return Team.create({ teamName, teamDescription })
            .then((record) => {

                return Promise.all([
                    record.addUser(adminId),
                    record.setTeamAdmin(adminId)
                ])
                    .then(() => record);
            });
    }

    read({ teamId }) {

        return Team.findOne({ where: { teamId }, include: [{ all: true }] });
    }

    update({ teamId, teamName, teamDescription }) {

        return Team.update({ teamName, teamDescription }, { where: { teamId }});
    }

    addMember({ teamId, memberId }) {

        return Team.findOne({ where: { teamId }})
            .then((record) => {

                record.addUser(memberId);
                return record;
            });
    }

    deleteMember({ teamId, memberId }) {

        return Team.findOne({ where: { teamId }})
            .then((record) => {

                record.removeUser(memberId);
                return record;
            });
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
