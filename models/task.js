'use strict';

const Sequelize = require('sequelize');
const sequelize = require('./db');

const Model = Sequelize.Model;

class Task extends Model {

    create({ listId, taskTitle, taskDescription, isDone, taskDeadline, assignees }) {

        return Task.create({ taskTitle, taskDescription, taskDeadline, isDone })
            .then((record) => {

                record.setTasklist(listId);
                record.addUsers(assignees);

                return record.save();
            });
    }

    read({ taskId }) {

        return Task.findAll({ where: { ...!!taskId && { taskId } }, include: [{ all: true }] });
    }

    update({ taskId, listId, taskTitle, taskDescription, isDone, taskDeadline, assignees }) {

        return Task.update({ listId, taskTitle, taskDescription, isDone, taskDeadline }, { where: { taskId } })
            .then(() => Task.findOne({ where: { taskId } }))
            .then((record) => {

                record.setUsers(assignees);

                return record.save();
            });
    }

    delete({ taskId }) {

        return Task.destroy({ where: { taskId } });
    }
}

Task.init({
    taskId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    taskTitle: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            max: 255
        }
    },
    taskDescription: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    isDone: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    taskDeadline: {
        type: Sequelize.DATE,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'task',
    underscored: true
});

module.exports = Task;
