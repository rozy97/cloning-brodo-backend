const db = require("../configs/db-config");

module.exports = {
  getAllWishlist: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM wishlist", (err, res) => {
        !err ? resolve(res) : reject(err);
      });
    });
  },
  postWishlist: req => {
    return new Promise((resolve, reject) => {
      db.query(
        "INSERT INTO wishlist SET name=?, price=?, image=?",
        [req.name, req.price, req.image],
        (err, res) => {
          !err ? resolve(res) : reject(err);
        }
      );
    });
  },
  deleteWishlist: id => {
    return new Promise((resolve, reject) => {
      db.query("DELETE FROM wishlist WHERE id=?", [id], (err, res) => {
        !err ? resolve(res) : reject(err);
      });
    });
  }
};
