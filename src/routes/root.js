const express = require("express");
const router = express.Router();
const product = require("./product-routes");
const cart = require("./cart-routes");
const wishlist = require("./wishlist-routes");
const branch = require("./branch-routes");

// using router
router.use("/", product);
router.use("/", cart);
router.use("/", wishlist);
router.use("/", branch);

module.exports = router;
