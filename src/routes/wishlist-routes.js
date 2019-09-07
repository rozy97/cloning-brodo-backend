const express = require("express");
const router = express.Router();
const wishlistController = require("../controllers/wishlist");

router.get("/wishlist", wishlistController.getAllWishlist); // DONE
router.post("/wishlist", wishlistController.postWishlist); // DONE
router.delete("/wishlist/:id", wishlistController.deleteWishlist); // DONE

module.exports = router;
