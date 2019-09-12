const db = require("../configs/db-config");

module.exports = {
  getAllProduct: (order = "id") => {
    //DONE
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM products ORDER BY ${order}`, (err, res) => {
        !err ? resolve(res) : reject(err);
      });
    });
  },
  getProductDetail: name => {
    // DONE
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM products WHERE name=?", [name], (err, res) => {
        !err ? resolve(res) : reject(err);
      });
    });
  },
  getProductByCategory: (name, order = "id") => {
    // DONE
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT products.*, category.name as category FROM pivot JOIN products on products.id=pivot.product_id JOIN category on category.id=pivot.category_id WHERE category.name=? ORDER BY ${order}`,
        [name],
        (err, res) => {
          !err ? resolve(res) : reject(err);
        }
      );
    });
  },

  getProductPaginate: (offset, limit) => {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM products LIMIT ?,?",
        // "SELECT products.*, categories.name AS category FROM products INNER JOIN categories ON products.id_category=categories.id LIMIT ?,?",
        [(parseInt(offset) - 1) * 9, 9],
        (err, res) => {
          !err ? resolve(res) : reject(err);
        }
      );
    });
  },
  getProductSearch: name => {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM products WHERE name LIKE ?",
        ["%" + name + "%"],
        (err, res) => {
          !err ? resolve(res) : reject(err);
        }
      );
    });
  }
};
