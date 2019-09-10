const express = require("express");
const router = express.Router();
const productController = require("../controllers/product-controller");

router.get("/collection", productController.getAllProduct); // DONE
router.get("/collection/:name", productController.getProductByCategory); // DONE

router.get("/product/:name", productController.getProductDetail); // DONE
router.get("/search/:name", productController.getProductSearch); // DONE
router.get("/products/page/:offset", productController.getProductPaginate);

module.exports = router;
