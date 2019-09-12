const db = require("../configs/db-config");

module.exports = {
  getAllCart: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM cart", (err, res) => {
        !err ? resolve(res) : reject(err);
      });
    });
  },
  postCart: req => {
    return new Promise((resolve, reject) => {
      db.query(
        "INSERT INTO cart SET name=?, price=?, image=?, product_id=?",
        [req.name, req.price, req.image, req.id],
        (err, res) => {
          !err ? resolve(res) : reject(err);
        }
      );
    });
  },
  deleteCart: id => {
    return new Promise((resolve, reject) => {
      db.query("DELETE FROM cart WHERE id=?", [id], (err, res) => {
        !err ? resolve(res) : reject(err);
      });
    });
  }
};
