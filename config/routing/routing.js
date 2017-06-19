/**
 * Created by aermicioi on 5/2/17.
 * @module routing.js
 */
'use strict';
if (module.main === module) {
  throw "Cannot start up as entry point";
}
const passport = require('passport');


const Boot = require('../../app/boot');
const express = require('express');

const fail = {
  failureRedirect: 'http://localhost:3000'
};
const passportAuthStrategy = passport.authenticate.bind(passport);

/**
 *
 * @param {Express} app
 */
function route(app) {
  app.post('/register', Boot.authController.register.bind(Boot.authController));

}

/**
 *
 * @param {Express} app
 */
function loadAuthenticationMiddleware(app) {

  app.post('/auth', passportAuthStrategy('local', {session: false}), Boot.authController.login.bind(Boot.authController));

}



module.exports = {
  route,
  loadAuthenticationMiddleware
};
