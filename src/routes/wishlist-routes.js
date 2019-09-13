const express = require("express");
const router = express.Router();
const wishlistController = require("../controllers/wishlist");

router.get("/wishlist", wishlistController.getAllWishlist); // DONE
router.get("/wishlist/:id", wishlistController.getWishlistByProductId);
router.post("/wishlist", wishlistController.postWishlist); // DONE
router.delete("/wishlist/:id", wishlistController.deleteWishlist); // DONE

module.exports = router;
