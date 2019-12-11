'use strict';

const Sequelize = require('sequelize');
const sequelize = require('./db');

const Model = Sequelize.Model;

class TaskList extends Model {

    create({ teamId, listName }) {

        return TaskList.create({ listName })
            .then((record) => {

                record.setTeam(teamId);
                return record.save();
            })
    }

    read({ teamId, listId }) {

        return TaskList.findAll({
            where: {
                ...!!teamId && { team_id: teamId },
                ...!!listId && { listId }
            },
            include: [{ all: true }]
        });
    }

    update({ listId, listName }) {

        return TaskList.update({ listName }, { where: { listId }});
    }

    delete({ listId }) {

        return TaskList.destroy({ where: { listId } });
    }
}

TaskList.init({
    listId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    listName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            max: 255
        }
    }
}, {
    sequelize,
    modelName: 'tasklist',
    underscored: true
});

module.exports = TaskList;
