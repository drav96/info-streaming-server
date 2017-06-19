/**
 * Created by aermicioi on 5/4/17.
 * @module exception/NotFoundException
 */
'use strict';
if (module.main === module) {
    throw "Cannot start up as entry point";
}

const Exception = require('./Exception').Exception;

/**
 * @class
 * @type {NotFoundException}
 */
module.exports.NotFoundException = class extends Exception {

};
