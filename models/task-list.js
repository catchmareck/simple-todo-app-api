'use strict';

const Sequelize = require('sequelize');
const sequelize = require('./db');

const Model = Sequelize.Model;

class TaskList extends Model {

    create({ list_name }) {

        return Promise.resolve('TODO');
    }

    read({ list_id }) {

        return Promise.resolve('TODO');
    }

    update({ list_id, list_name }) {

        return Promise.resolve('TODO');
    }

    delete({ list_id }) {

        return Promise.resolve('TODO');
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
