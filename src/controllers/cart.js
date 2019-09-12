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
        let data = req.body;
        data.id = response.insertId;
        respon.success(res, 200, data);
      })
      .catch(err => {
        console.log(err);
      });
  },

  deleteCart: (req, res) => {
    modelCart
      .deleteCart(req.params.id)
      .then(response => {
        let data = req.params.id;
        respon.success(res, 200, data);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
