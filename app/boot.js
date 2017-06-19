/**
 * Created by aermicioi on 5/2/17.
 * @module factory/boot
 */


if (module.main === module) {
  throw 'Cannot start up as entry point';
}

const AuthControllerModule = require('../app/auth/AuthController');
const AuthServiceModule = require('../app/auth/AuthService');

const SMUserModelModule = require('./model/SMUserModel');



/****************************AuthenticationController****************************/
const authService = new AuthServiceModule.AuthService(SMUserModelModule.SMUser);
const authController = new AuthControllerModule.AuthController(authService);





module.exports = {
authController
};
