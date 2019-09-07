const modelCart = require("../models/cart-models");
const respon = require("../helpers/response");

module.exports = {
  getAllCart: (req, res) => {
    modelCart
      .getAllCart()
      .then(response => {
        respon.success(res, 200, response);
      })
      .catch(err => {
        console.log(err);
      });
  },

  postCart: (req, res) => {
    modelCart
      .postCart(req.body)
      .then(response => {
        respon.success(res, 200, response);
      })
      .catch(err => {
        console.log(err);
      });
  },

  deleteCart: (req, res) => {
    modelCart
      .deleteCart(req.params.id)
      .then(response => {
        respon.success(res, 200, response);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
