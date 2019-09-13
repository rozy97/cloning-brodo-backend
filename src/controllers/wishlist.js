const modelWishlist = require("../Models/wishlist-models");
const respon = require("../Helpers/response");

module.exports = {
  getAllWishlist: (req, res) => {
    modelWishlist
      .getAllWishlist()
      .then(response => {
        respon.success(res, 200, response);
      })
      .catch(err => {
        console.log(err);
      });
  },

  getWishlistByProductId: (req, res) => {
    modelWishlist
      .getWishlistByProductId(req.params.id)
      .then(response => {
        respon.success(res, 200, response);
      })
      .catch(err => {
        console.log(err);
      });
  },

  postWishlist: (req, res) => {
    modelWishlist
      .postWishlist(req.body)
      .then(response => {
        respon.success(res, 200, response);
      })
      .catch(err => {
        console.log(err);
      });
  },

  deleteWishlist: (req, res) => {
    modelWishlist
      .deleteWishlist(req.params.id)
      .then(response => {
        respon.success(res, 200, response);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
