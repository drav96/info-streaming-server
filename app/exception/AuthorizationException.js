/**
 * Created by aermicioi on 5/4/17.
 * @module exception/AbstractMethodException
 */
'use strict';
if (module.main === module) {
    throw "Cannot start up as entry point";
}

const Exception = require('./Exception').Exception;

/**
 *
 */
class AuthorizationException extends Exception {

}

/**
 *
 * @type {{AuthorizationException: AuthorizationException}}
 */
module.exports = {
    AuthorizationException
};