'use strict';

class Validator {

    constructor() {

        this.validators = [];
    }

    evaluate(value) {

        for (let fn of this.validators) {

            if (!fn(value)) {
                return false;
            }
        }

        return true;
    }

    required() {

        this._addValidator((value) => !!value && value.toString().trim().length > 0);

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

    _addValidator(fn) {

        this.validators.push(fn);
    }
}

module.exports = () => new Validator();
