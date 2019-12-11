'use strict';

const Sequelize = require('sequelize');
const sequelize = require('./db');

const Model = Sequelize.Model;

class User extends Model {

    create({ username, userEmail, firstName, lastName }) {

        return User.create({
            username,
            userEmail,
            firstName,
            lastName,
            displayName: `${firstName} ${lastName}`,
            active: true
        });
    }

    read({ userId }) {

        return User.findAll({ where: { ...!!userId && { userId } } });
    }
}

User.init({
    userId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            max: 75
        }
    },
    userEmail: {
        type: Sequelize.STRING,
        allowNull: false
    },
    displayName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            max: 255
        }
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            max: 255
        }
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            max: 255
        }
    },
    active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, {
    sequelize,
    modelName: 'user',
    underscored: true
});

module.exports = User;