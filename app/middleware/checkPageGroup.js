/**
 * Created by lupeidragos on 4/5/17.
 */
const SMPageGroup = require("../model/SMPageGroupModel");
const pageGroupStorageSize = 200000000;
module.exports.checkPageGroupStorage = (req, res, next) => {
  SMPageGroup.findOne({_id: req.params.pageGroupId}, (err, response) => {
    if (err) return res.status(503).json(err);
    if (response.size > pageGroupStorageSize) {
      return res.status(403).json("You have exceeded the size limit on your page group.");
    }
    next();
  })
};

