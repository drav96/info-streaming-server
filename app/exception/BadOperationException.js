/**
 * Created by aermicioi on 5/4/17.
 * @module exception/BadOperationException
 */
'use strict';
if (module.main === module) {
    throw "Cannot start up as entry point";
}

const Exception = require('./Exception').Exception;

/**
 *
 */
class BadOperationException extends Exception {

}

/**
 *
 * @type {{BadOperationException: BadOperationException}}
 */
module.exports = {
    BadOperationException
};
