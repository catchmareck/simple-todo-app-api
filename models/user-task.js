'use strict';

const Sequelize = require('sequelize');
const sequelize = require('./db');

const Model = Sequelize.Model;
class UsersTasks extends Model {}

UsersTasks.init({}, {
    sequelize,
    modelName: 'usersTasks',
    underscored: true,
});

module.exports = UsersTasks;
