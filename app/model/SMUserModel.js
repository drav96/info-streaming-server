/**
 *
 * @module core/model/SMUserModel
 */
"use strict";
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validators = require('mongoose-validators');
const sanitizerPlugin = require('mongoose-sanitizer');
const bcrypt = require('bcrypt-nodejs');
const Promise = require('bluebird');

/**
 * @name UserSchema
 * @type {Schema}
 */
const UserSchema = new Schema({
  username: {type: String, unique: true},
  firstName: String,
  lastName: String,
  email: {type: String, required: true, unique: true},
  password: {type: String},
  confirmationCode: String,
  confirmed: {type: Boolean, default: false},
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  avatar: String,
}, {
  timestamps: true
});

UserSchema.pre('save', function (next) {
  let user = this;
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, null, function (err, hash) {
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

UserSchema.methods.comparePassword = function (passw) {
  const compare = Promise.promisify(bcrypt.compare);
  return compare(passw, this.password);
};

UserSchema.statics.get = function (identity) {
  let NotFoundException = require('../exception/NotFoundException').NotFoundException;
  return this.findById(identity).exec().then(user => {

    if (user === null) {
      throw new NotFoundException();
    }

    return user;
  });
};


UserSchema.plugin(sanitizerPlugin);

/**
 * @type {UserSchema}
 */
module.exports.SMUser = mongoose.model('SMUser', UserSchema);
