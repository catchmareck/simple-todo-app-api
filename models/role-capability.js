'use strict';

const Sequelize = require('sequelize');
const sequelize = require('./db');

const Model = Sequelize.Model;

class RoleCapability extends Model {

    create({ roleId, capName }) {

        return RoleCapability.create({ capName })
            .then((record) => {

                record.setRole(roleId);
                return record.save();
            });
    }

    read({ capId }) {

        return RoleCapability.findOne({ where: { capId }, include: [{ all: true }] });
    }

    update({ capId, capName }) {

        return RoleCapability.update({ capName }, { where: { capId }});
    }

    delete({ capId }) {

        return RoleCapability.destroy({ where: { capId } });
    }
}

RoleCapability.init({
    capId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    capName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            max: 255
        }
    }
}, {
    sequelize,
    modelName: 'roleCapabilities',
    underscored: true
});

module.exports = RoleCapability;
