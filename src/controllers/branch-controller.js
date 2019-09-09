const modelBranch = require("../models/branch-models");
const respon = require("../helpers/response");

module.exports = {
  getAllBranch: (req, res) => {
    modelBranch
      .getAllBranch()
      .then(response => {
        respon.success(res, 200, response);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
