const usersDb = require("../models/users");
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
    console.log(user);
    await user.save();
    res.send({ success: true, secret: user.secret });
  },

  //   getSingle: async (req, res) => {
  //     const { id } = req.params;
  //     const product = await productDb.findOne({ _id: id });
  //     res.send({ product });
  //   },

  loginUser: async (req, res) => {
    console.log("On login.");
    const { userName, password } = req.body;
    const user = await usersDb.findOne({ userName: userName, password: password });
    console.log("User ?: " + user);
    res.send({ user });
  },

  //   createProduct: async (req, res) => {
  //     const { title, image, price } = req.body;
  //     const product = new productDb();
  //     product.title = title;
  //     product.image = image;
  //     product.price = price;
  //     product.quantity = 1;
  //     await product.save();

  //     res.send({ success: true });
  //   },
  //   getAll: async (req, res) => {
  //     const products = await productDb.find();
  //     res.send({ products });
  //   },

  //   getSingle: async (req, res) => {
  //     const { id } = req.params;
  //     const product = await productDb.findOne({ _id: id });
  //     res.send({ product });
  //   },

  //   deleteProduct: async (req, res) => {
  //     const { id } = req.params;
  //     await productDb.findOneAndDelete({ _id: id });
  //     res.send({ success: true });
  //   },
};
