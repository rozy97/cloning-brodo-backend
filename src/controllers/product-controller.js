const modelProduct = require("../models/product-models");
const respon = require("../helpers/response");

module.exports = {
  getAllProduct: (req, res) => {
    modelProduct
      .getAllProuct()
      .then((response) => {
        respon.success(res, 200, response);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  getProductByCategory: (req, res) => {
    modelProduct
      .getProductByCategory()
      .then((response) => {
        respon.success(res, 200, response);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  getProductbyLabel: (req, res) => {
    modelProduct
      .getProductByLabel()
      .then((response) => {
        respon.success(res, 200, response);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  getProductByStatus: (req, res) => {
    modelProduct
      .getProductByStatus()
      .then((response) => {
        respon.success(res, 200, response);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  getProductDetail: (req, res) => {
    modelProduct
      .getProductDetail()
      .then((response) => {
        respon.success(res, 200, response);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  searchProduct: (req, res) => {
    modelProduct
      .searchProduct()
      .then((response) => {
        respon.success(res, 200, response);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
