const db = require("../configs/db-config");

module.exports = {
  getAllProduct: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM products", (err, res) => {
        !err ? resolve(res) : reject(err);
      });
    });
  },
  getProductDetail: name => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM products WHERE name=?", [name], (err, res) => {
        !err ? resolve(res) : reject(err);
      });
    });
  },
  getProductByCategory: name => {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM products WHERE category=?",
        [name],
        (err, res) => {
          !err ? resolve(res) : reject(err);
        }
      );
    });
  },
  getProductByLabel: name => {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT products.*, label.name AS label FROM products INNER JOIN label ON products.id_label=label.id WHERE label.name=?",
        [name],
        (err, res) => {
          !err ? resolve(res) : reject(err);
        }
      );
    });
  },
  getProductByStatus: name => {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT products.*, status.name AS status FROM products INNER JOIN status ON products.id_status=status.id WHERE status.name=?",
        [name],
        (err, res) => {
          !err ? resolve(res) : reject(err);
        }
      );
    });
  },
  getProductPaginate: (offset, limit) => {
    return new Promise((resolve, reject) => {
      conn.query(
        "SELECT products.*, categories.name AS category FROM products INNER JOIN categories ON products.id_category=categories.id LIMIT ?,?",
        [parseInt(offset), parseInt(limit)],
        (err, res) => {
          !err ? resolve(res) : reject(err);
        }
      );
    });
  },
  getProductSearch: name => {
    return new Promise((resolve, reject) => {
      conn.query(
        "SELECT products.*, categories.name AS category FROM products INNER JOIN categories ON products.id_category=categories.id WHERE categories.name LIKE ? OR products.name LIKE ? OR products.description LIKE ?",
        ["%" + name + "%", "%" + name + "%", "%" + name + "%"],
        (err, res) => {
          !err ? resolve(res) : reject(err);
        }
      );
    });
  }
};
