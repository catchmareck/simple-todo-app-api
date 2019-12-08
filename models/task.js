'use strict';

const Sequelize = require('sequelize');
const sequelize = require('./db');

const Model = Sequelize.Model;

class Task extends Model {

    create({ list_id, task_title, task_description, is_done, task_deadline, assignees }) {

        return Promise.resolve('TODO');
    }

    read({ task_id }) {

        return Promise.resolve('TODO');
    }

    update({ task_id, list_id, task_title, task_description, is_done, task_deadline, assignees }) {

        return Promise.resolve('TODO');
    }

    delete({ task_id }) {

        return Promise.resolve('TODO');
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
