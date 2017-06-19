/**
 * Created by aermicioi on 5/4/17.
 * @module exception/Exception
 */
'use strict';
if (module.main === module) {
    throw "Cannot start up as entry point";
}

/**Exception
 * @class
 * @type {Exception}
 */
module.exports.Exception = class extends Error {


  get code() {
    return this.id;
  }

  set code(value) {
    this.id = value;
  }
};
