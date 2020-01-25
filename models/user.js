'use strict';

const Sequelize = require('sequelize');
const sequelize = require('./db');

const Model = Sequelize.Model;

class User extends Model {

    create({ username, userEmail, firstName, lastName, password }) {

        return User.create({
            username,
            userEmail,
            firstName,
            lastName,
            displayName: `${firstName} ${lastName}`,
            password,
            active: true
        });
    }

    read({ userId, username }) {

        return User.findAll({ where: { ...!!userId && { userId }, ...!!username && { username } }, include: [{ all: true, include:[{ all: true }] }] });
    }

    update({ userId, roles, username, userEmail, firstName, lastName }) {

        return User.findOne( { where: { userId } })
            .then((record) => {

                !!roles && record.setRoles(roles);
                !!username && record.set('username', username);
                !!userEmail && record.set('userEmail', userEmail);
                !!firstName && record.set('firstName', firstName);
                !!lastName && record.set('lastName', lastName);
                record.set('displayName', `${record.get('firstName')} ${record.get('lastName')}`);

                return record.save();
            });
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
        },
        unique: true
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
    password: {
        type: Sequelize.STRING,
        allowNull: false
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