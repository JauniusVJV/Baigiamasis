const usersDb = require("../models/users");
const wmetersDB = require("../models/waterMeter");
const organisationsDB = require("../models/organisation");
const adsressesDB = require("../models/address");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  createUser: async (req, res) => {
    const { userName, password, name, lastName, email, phone } = req.body;
    let secret = "";
    const user = new usersDb();
    user.userName = userName;
    user.password = password;
    user.name = name;
    user.lastName = lastName;
    user.email = email;
    user.phone = phone;
    user.secret = uuidv4();
    await user.save();
    res.send({ success: true, secret: user.secret });
  },

  loginUser: async (req, res) => {
    const { userName, password } = req.body;
    const user = await usersDb.findOne({ userName: userName, password: password });
    res.send({ success: true, user });
  },

  createOrganisation: async (req, res) => {
    const { orgTitle, code, codeVAT, addressID, userID, objectID } = req.body;
    const org = new organisationsDB();
    org.orgTitle = orgTitle;
    org.code = code;
    org.codeVAT = codeVAT;
    org.addressID = addressID;
    org.userID = userID;
    org.objectID = objectID;
    await org.save();
    res.send({ success: true });
  },

  getOrganizations: async (req, res) => {
    const { userID } = req.params;
    const org = await organisationsDB.find({ userID });
    res.send(org);
  },

  deleteOrganization: async (req, res) => {
    const { id } = req.params;
    await organisationsDB.findOneAndDelete({ _id: id });
    res.send({ success: true });
  },

  updateOrganisation: async (req, res) => {
    const { orgTitle, code, codeVAT, _id } = req.body;
    const org = await organisationsDB.updateOne(
      { _id: _id },
      { orgTitle: orgTitle, code: code, codeVAT: codeVAT }
    );
    res.send({ success: true });
  },

  //
  // const addressSchema = new Schema({
  // country: { type: String, required: true },
  //   city: { type: String, required: true },
  //   street: {  //     type: String,  //     required: true,  //   },
  //   number: {  //     type: String,  //     required: true,  //   },
  //   flatNumber: {  //     type: String,  //     required: false,  //   },
  //   userID: {  //     type: String,  //     required: false,  //   },
  //   objectID: {  //     type: String,  //     required: false,  //   },
  //   deleted: {  //     type: Boolean,  //     required: false,  //   },
  // });
  //

  createAddress: async (req, res) => {
    const { country, city, street, number, flatNumber, userID, objectID, deleted } = req.body;
    const addresses = new adsressesDB();
    addresses.country = country;
    addresses.city = city;
    addresses.street = street;
    addresses.number = number;
    addresses.flatNumber = flatNumber;
    addresses.userID = userID;
    await addresses.save();
    res.send({ success: true });
  },

  getAddresses: async (req, res) => {
    const { userID } = req.params;
    const addresses = await adsressesDB.find({ userID }); // { userID: userID }
    res.send(addresses);
  },

  deleteAddress: async (req, res) => {
    const { id } = req.params;
    await adsressesDB.findOneAndDelete({ _id: id });
    res.send({ success: true });
  },

  updateAddress: async (req, res) => {
    const { country, city, street, number, flatNumber, _id } = req.body;
    const org = await adsressesDB.updateOne(
      { _id: _id },
      { country, city, street, number, flatNumber }
    );
    res.send({ success: true });
  },

  addWmeter: async (req, res) => {
    const { wmNumber, otherInfo, userID } = req.body;
    const wmeter = new wmetersDB();
    wmeter.wmNumber = wmNumber;
    wmeter.otherInfo = otherInfo;
    wmeter.userID = userID;
    await wmeter.save();
    res.send({ success: true });
  },

  getWmeters: async (req, res) => {
    const { userID } = req.params;
    const wmeters = await wmetersDB.find({ userID });
    res.send(wmeters);
  },

  deleteWmeter: async (req, res) => {
    const { id } = req.params;
    await wmetersDB.findOneAndDelete({ _id: id });
    res.send({ success: true });
  },
};
