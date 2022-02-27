const express = require("express");
const router = express.Router();
const middle = require("../middleware/main");

// const { createProduct, getAll, getSingle, deleteProduct } = require("../controllers/main");
const { createUser, loginUser } = require("../controllers/main");

router.post("/registerUser", middle.validateUser, createUser);
router.post("/login", middle.validateLogin, loginUser);

// router.get("/all", getAll);
// router.get("/single/:id", getSingle);
// router.get("/delete/:id", deleteProduct);

module.exports = router;
