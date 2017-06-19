/**
 * Created by lupeidragos on 5/16/17.
 */
const config = require('config');

const JwtStrategy = require('passport-jwt').Strategy,
      ExtractJwt  = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local').Strategy;

/**
 *
 * @type {UserSchema}
 */
const SMUser = require('../../model/SMUserModel').SMUser;

module.exports = new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
    session: false
  },
  (req, email, password, done) => {
    SMUser.findOne({email: email}, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {

        return done(null, false);
      }
      if (!user.comparePassword(password)) {
        return done(null, false);
      }

      return done(null, user);
    });
  }
);

