'use strict';

const Sequelize = require('sequelize');
const sequelize = require('./db');

const Model = Sequelize.Model;

class Task extends Model {

    create({ list_id, task_title, task_description, is_done, task_deadline, assignees }) {

        return Task.create({ task_title, task_description, task_deadline, is_done })
            .then((record) => {

                record.setList(list_id);
                record.addUsers(assignees);

                return record.save();
            });
    }

    read({ task_id }) {

        return Task.findAll({ where: { ...!!task_id && { task_id } } });
    }

    update({ task_id, list_id, task_title, task_description, is_done, task_deadline, assignees }) {

        return Task.update({ list_id, task_title, task_description, is_done, task_deadline }, { where: { task_id } })
            .then((record) => {

                record.setUsers(assignees);

                return record.save();
            });
    }

    delete({ task_id }) {

        return Task.destroy({ where: { task_id } });
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
