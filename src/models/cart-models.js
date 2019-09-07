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
        "INSERT INTO cart SET id_label=?, id_status=?, name=?, description=?, price=?, category=?, image=?",
        [
          req.id_label,
          req.id_status,
          req.name,
          req.description,
          req.price,
          req.category,
          req.image
        ],
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
