const express = require('express')
const router = express.Router()
const middle = require("../middleware/main")

const {createProduct, getAll, getSingle, deleteProduct} = require("../controllers/main")

router.post("/create", middle.validateProduct, createProduct)
router.get("/all", getAll)
router.get("/single/:id", getSingle)
router.get("/delete/:id", deleteProduct)

module.exports = router