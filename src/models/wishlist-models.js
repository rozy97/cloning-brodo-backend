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
        "INSERT INTO wishlist SET id_label=?, id_status=?, name=?, description=?, price=?, category=?, image=?",
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
  deleteWishlist: id => {
    return new Promise((resolve, reject) => {
      conn.query("DELETE FROM wishlist WHERE id=?", [id], (err, res) => {
        !err ? resolve(res) : reject(err);
      });
    });
  }
};
