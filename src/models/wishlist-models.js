const db = require("../configs/db-config");

module.exports = {
  getAllWishlist: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM wishlist", (err, res) => {
        !err ? resolve(res) : reject(err);
      });
    });
  },
  getWishlistByProductId: (id) => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM wishlist WHERE product_id=?",[id], (err, res) => {
        !err ? resolve(res) : reject(err);
      });
    });
  },
  postWishlist: req => {
    return new Promise((resolve, reject) => {
      db.query(
        "INSERT INTO wishlist SET name=?, price=?, image=?, product_id=?",
        [req.name, req.price, req.image, req.product_id],
        (err, res) => {
          !err ? resolve(res) : reject(err);
        }
      );
    });
  },
  deleteWishlist: id => {
    return new Promise((resolve, reject) => {
      db.query("DELETE FROM wishlist WHERE product_id=?", [id], (err, res) => {
        !err ? resolve(res) : reject(err);
      });
    });
  }
};
