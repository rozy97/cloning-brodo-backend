const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cart");

router.get("/cart", cartController.getAllCart); // DONE
router.post("/cart", cartController.postCart); // DONE
router.delete("/cart/:id", cartController.deleteCart); // DONE

module.exports = router;
