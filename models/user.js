'use strict';

class User {

    constructor() {}

    create({ username, user_email, first_name, last_name }) {

        // active = true
        // display_name = first + last
        return Promise.resolve('TODO');
    }

    read({ user_id }) {

        return Promise.resolve('TODO');
    }
}

module.exports = {
    User
};
