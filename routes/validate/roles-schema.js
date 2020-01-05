'use strict';

const Is = require('../../utils/validator');

module.exports = {
    create: {
        body: {
            roleName: Is().required().string().maxLen(255)
        }
    },
    read: {
        params: {
            id: Is().required().string()
        }
    },
    update: {
        params: {
            id: Is().required().string()
        },
        body: {
            roleName: Is().required().string().maxLen(255)
        }
    },
    addCapability: {
        params: {
            roleId: Is().required().string()
        },
        body: {
            capName: Is().required().string().maxLen(255)
        }
    },
    deleteCapability: {
        params: {
            roleId: Is().required().string(),
            capId: Is().required().string()
        }
    }
};
