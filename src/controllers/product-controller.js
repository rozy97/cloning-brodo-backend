const modelProduct = require("../models/product-models");
const respon = require("../helpers/response");

module.exports = {
  getAllProduct: (req, res) => {
    modelProduct
      .getAllProduct()
      .then(response => {
        respon.success(res, 200, response);
      })
      .catch(err => {
        console.log(err);
      });
  },

  getProductByCategory: (req, res) => {
    modelProduct
      .getProductByCategory(req.params.name)
      .then(response => {
        respon.success(res, 200, response);
      })
      .catch(err => {
        console.log(err);
      });
  },

  getProductbyLabel: (req, res) => {
    modelProduct
      .getProductByLabel(req.params.name)
      .then(response => {
        respon.success(res, 200, response);
      })
      .catch(err => {
        console.log(err);
      });
  },

  getProductByStatus: (req, res) => {
    modelProduct
      .getProductByStatus(req.params.name)
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

  searchProduct: (req, res) => {
    modelProduct
      .searchProduct(req.params.name)
      .then(response => {
        respon.success(res, 200, response);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
