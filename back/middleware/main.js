const valid = require("email-validator");
const usersDb = require("../models/users");

module.exports = {
  validateUser: (req, res, next) => {
    const { userName, password, passwordTwo, name, lastName, email } = req.body;

    if (userName.length > 30 || userName.length < 6)
      return res.send({
        success: false,
        message:
          "User name legth must be from 6 to 30 characters. Current user name length: " +
          userName.length,
      });

    if (!password === passwordTwo)
      return res.send({ success: false, message: "Passwords do not match. Repeate pls." });

    if (password.length < 8)
      return res.send({
        success: false,
        message: "Password length must be equal or more than 8.",
      });

    if (name.length > 50 || name.length < 3)
      return res.send({
        success: false,
        message: "Name legth must be from 3 to 50 characters. Current name length: " + name.length,
      });

    if (lastName.length > 50 || lastName.length < 3)
      return res.send({
        success: false,
        message:
          "Last name legth must be from 3 to 50 characters. Current last name length: " +
          lastName.length,
      });

    if (!valid.validate(email))
      return res.send({
        success: false,
        message: "E-mail validator: bad email. ",
      });

    next();
  },

  // --------------------------- Organization
  //  validateOrg
  validateOrg: (req, res, next) => {
    const { orgTitle, code, codeVAT, addressID, userID, objectID } = req.body;

    if (orgTitle.length < 3 || orgTitle.length > 500)
      return res.send({
        success: false,
        message:
          "Organization title legth must be from 3 to 500 characters. Current user name length: " +
          orgTitle.length,
      });

    if (code.length < 9)
      return res.send({
        success: false,
        message: "Organization code length must be equal or more than 9.",
      });

    if (codeVAT.length < 9)
      return res.send({
        success: false,
        message: "Organization VAT code length must be equal or more than 9.",
      });

    next();
  },

  // --------------------------- Address
  //  validateAddress
  validateAddress: (req, res, next) => {
    const { country, city, street, number, flatNumber } = req.body;

    if (country.length < 3 || country.length > 200)
      return res.send({
        success: false,
        message:
          "Country legth must be from 3 to 200 characters. Current length: " + country.length,
      });

    if (city.length < 3 || city.length > 200)
      return res.send({
        success: false,
        message: "City legth must be from 3 to 200 characters. Current length: " + city.length,
      });

    if (street.length < 3 || street.length > 200)
      return res.send({
        success: false,
        message: "Street legth must be from 3 to 200 characters. Current length: " + street.length,
      });

    if (number.length < 1 || number.length > 10)
      return res.send({
        success: false,
        message: "Number legth must be from 1 to 10 characters. Current length: " + number.length,
      });
    if (flatNumber.length > 10)
      return res.send({
        success: false,
        message:
          "Flat number legth must be from 3 to 200 characters. Current length: " +
          flatNumber.length,
      });

    next();
  },
  // --------------------------- validateAddress. End.

  // --------------------------- Login

  validateLogin: async (req, res, next) => {
    const { userName, password } = req.body;
    const user = await usersDb.findOne({ userName: userName, password: password });
    if (!user)
      return res.send({
        success: false,
        message:
          "There is no user with the given username / password. Did you enter it correctly? ",
      });

    next();
  },

  validateWmeter: async (req, res, next) => {
    const { wmNumber, otherInfo, userID } = req.body;

    // const user = await usersDb.findOne({ userName: userName, password: password });
    if (wmNumber.length < 3 || wmNumber.length > 30)
      return res.send({
        success: false,
        message:
          "Water meter number legth must be from 3 to 30 characters. Current number length: " +
          wmNumber.length,
      });

    if (otherInfo.length < 3 || otherInfo.length > 500)
      return res.send({
        success: false,
        message: 'Here must be info like "Hot water, meter located in basement"... ',
      });

    if (userID.length < 5)
      return res.send({
        success: false,
        message: "Wrong user ID. Maybe you must login ? ",
      });

    next();
  },
};
