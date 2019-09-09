const db = require("../configs/db-config");

module.exports = {
  getAllBranch: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM branch", (err, res) => {
        !err ? resolve(res) : reject(err);
      });
    });
  }
};
