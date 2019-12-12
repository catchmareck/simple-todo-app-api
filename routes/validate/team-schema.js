'use strict';

const Is = require('../../utils/validator');

module.exports = {
    create: {
        body: {
            teamName: Is().required().string().maxLen(255),
            teamDescription: Is().optional().string().maxLen(255),
            adminId: Is().required().number()
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
            teamName: Is().required().string().maxLen(255),
            teamDescription: Is().optional().string().maxLen(255)
        }
    },
    addMember: {
        params: {
            teamId: Is().required().string(),
            memberId: Is().required().string()
        }
    },
    deleteMember: {
        params: {
            teamId: Is().required().string(),
            memberId: Is().required().string()
        }
    }
};
