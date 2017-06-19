const local = require('./local');


/**
 * Expose
 */

module.exports = (passport) => {

  // Used strategies for login
  passport.use(local);

};
