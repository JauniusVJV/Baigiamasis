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

  // --------------------------- Login

  validateLogin: async (req, res, next) => {
    const { userName, password } = req.body;
    console.log("middleware checked login");

    const user = await usersDb.findOne({ userName: userName, password: password });
    if (!user)
      return res.send({
        success: false,
        message: "There is no user with the given password. Check your username / password.",
      });

    next();
  },
};
