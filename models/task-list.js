'use strict';

const Sequelize = require('sequelize');
const sequelize = require('./db');

const Model = Sequelize.Model;

class TaskList extends Model {

    create({ team_id, list_name }) {

        return TaskList.create({ list_name })
            .then((record) => {

                record.setTeam(team_id);
                return record.save();
            })
    }

    read({ teamId, listId }) {

        return TaskList.findAll({
            where: {
                ...!!teamId && { teamId },
                ...!!listId && { listId }
            }
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
