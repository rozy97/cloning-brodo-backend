const modelProduct = require("../models/product-models");
const respon = require("../helpers/response");

module.exports = {
  getAllProduct: (req, res) => {
    modelProduct
      .getAllProduct(req.query.order)
      .then(response => {
        respon.success(res, 200, response);
      })
      .catch(err => {
        console.log(err);
      });
  },

  getProductByCategory: (req, res) => {
    const name = req.params.name;
    const order = req.query.order;
    modelProduct
      .getProductByCategory(name, order)
      .then(response => {
        respon.success(res, 200, response);
      })
      .catch(err => {
        console.log(err);
      });
  },

  getProductDetail: (req, res) => {
    modelProduct
      .getProductDetail(req.params.name)
      .then(response => {
        respon.success(res, 200, response);
      })
      .catch(err => {
        console.log(err);
      });
  },

  getProductSearch: (req, res) => {
    modelProduct
      .getProductSearch(req.params.name)
      .then(response => {
        respon.success(res, 200, response);
      })
      .catch(err => {
        console.log(err);
      });
  },

  getProductPaginate: (req, res) => {
    modelProduct
      .getProductPaginate(req.params.offset, req.params.limit)
      .then(response => {
        respon.success(res, 200, response);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
