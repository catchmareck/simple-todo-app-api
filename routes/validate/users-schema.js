'use strict';

const Is = require('../../utils/validator');

module.exports = {
    create: {
        body: {
            username: Is().required().string().maxLen(255),
            userEmail: Is().required().email(),
            firstName: Is().required().string(),
            lastName: Is().required().string(),
            password: Is().required().string()
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
            roles: Is().optional().array(['number']),
            username: Is().optional().string().maxLen(75),
            userEmail: Is().optional().email(),
            firstName: Is().optional().string().maxLen(255),
            lastName: Is().optional().string().maxLen(255)
        }
    },
    login: {
        body: {
            username: Is().required().string(),
            password: Is().required().string()
        }
    }
};
