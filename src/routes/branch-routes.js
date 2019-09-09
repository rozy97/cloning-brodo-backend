const express = require("express");
const router = express.Router();
const branchController = require("../controllers/branch-controller");

router.get("/branch", branchController.getAllBranch);

module.exports = router;
