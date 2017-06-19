/**
 * Created by lupeidragos on 5/8/17.
 */
'use strict';
const Logger = require('winston');

/**
 * @class
 */
class AuthController {

  constructor(authService) {
    this.authService = authService;

  }

  register(req, res) {
    let username = req.body.username;
    let email = req.body.username;
    let password = req.body.password;
    this.authService.register(username, email, password).then(user => {

      res.status(200).json("Successfully created new user");
    }).catch((err) => {

      Logger.log('error', err);
      res.status(500);
    });
  }

  login(req, res) {
    let user = req.user;

    this.authService.authenticate(user).then(() => {
      res.send(true);
      res.end();
    }).catch((err) => {
      res.status(500).json(err);
    });
  }

}

module.exports.AuthController = AuthController;


