const express = require("express");
const router = express.Router();
const middle = require("../middleware/main");

const {
  createUser,
  loginUser,
  addWmeter,
  getWmeters,
  deleteWmeter,
  createOrganisation,
  getOrganizations,
  deleteOrganization,
  updateOrganisation,
  createAddress,
  deleteAddress,
  getAddresses,
  updateAddress,
} = require("../controllers/main");

router.post("/registerUser", middle.validateUser, createUser);
router.post("/login", middle.validateLogin, loginUser);

router.post("/addwmeter", middle.validateWmeter, addWmeter);
router.get("/getwmeters/:userID", getWmeters);
router.get("/delwmeter/:id", deleteWmeter);

router.post("/addorganization", middle.validateOrg, createOrganisation);
router.get("/getorg/:userID", getOrganizations);
router.get("/delorg/:id", deleteOrganization);
router.post("/updateorganization", middle.validateOrg, updateOrganisation);

router.post("/addaddress", middle.validateAddress, createAddress);
router.post("/updateaddress", middle.validateAddress, updateAddress);
router.get("/deladdress/:id", deleteAddress);
router.get("/getadresses/:userID", getAddresses);

module.exports = router;
