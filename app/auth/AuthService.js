const config = require('config');
const jwt = require('jsonwebtoken');
const NotFoundException = require('../exception/NotFoundException').NotFoundException;

'use strict';
if (module.main === module) {
  throw "Cannot start up as entry point";
}

/**
 * @class
 */
class AuthService {

  constructor(modelCollection) {
    this.modelCollection = modelCollection;
  }

  register(username, email, password) {
    let newUser = {
      username: username,
      email: email,
      password: password
    };
    return this.modelCollection.create(newUser);
  }

  authenticate(user) {
    user = {
      email: user.email,
      username: user.username,
      _id: user._id
    };
    let token = jwt.sign(user, config.get('secret'), {expiresIn: config.get('expiresIn')}); //One week expiration time
    return Promise.resolve(token);
  }
}
/**
 *
 * @type {AuthService}
 */

module.exports.AuthService = AuthService;
