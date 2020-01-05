'use strict';

const Sequelize = require('sequelize');
const sequelize = require('./db');

const Model = Sequelize.Model;
class UsersRoles extends Model {}

UsersRoles.init({}, {
    sequelize,
    modelName: 'usersRoles',
    underscored: true,
});

module.exports = UsersRoles;
