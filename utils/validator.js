'use strict';

class Validator {

    constructor() {

        this.validators = [];
    }

    evaluate(value) {

        for (let i = 0; i < this.validators.length; i++) {

            const fn = this.validators[i];
            if (!fn(value)) {
                return false;
            }
        }

        return true;
    }

    required() {

        this._addValidator((value) => typeof value !== 'undefined' && value !== null && value.toString().trim().length > 0);

        return this;
    }

    optional() {

        this._addValidator((value) => {

            if (!value) {

                this.validators = [];
            }

            return true;
        });

        return this;
    }

    string() {

        this._addValidator((value) => typeof value === 'string');

        return this;
    }

    minLen(min) {

        this._addValidator((value) => typeof value === 'string' && value.length >= min);

        return this;
    }

    maxLen(max) {

        this._addValidator((value) => typeof value === 'string' && value.length <= max);

        return this;
    }

    number() {

        this._addValidator((value) => Number.isInteger(value));

        return this;
    }

    boolean() {

        this._addValidator((value) => value === true || value === false);

        return this;
    }

    date() {

        this._addValidator((value) => (new Date(value)).toString() !== 'Invalid Date');

        return this;
    }

    array(of) {

        this._addValidator((value) => Array.isArray(value) && value.every((el) => of.indexOf(typeof el) !== -1));

        return this;
    }

    email() {

        this._addValidator((value) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value));

        return this;
    }

    _addValidator(fn) {

        this.validators.push(fn);
    }
}

module.exports = () => new Validator();
