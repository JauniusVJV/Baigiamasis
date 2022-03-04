const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addressSchema = new Schema({
  country: { type: String, required: true },
  city: { type: String, required: true },
  street: { type: String, required: true },
  number: {
    type: String,
    required: true,
  },
  flatNumber: {
    type: String,
    required: false,
  },
  userID: {
    type: String,
    required: false,
  },
  objectID: {
    type: String,
    required: false,
  },
  deleted: {
    type: Boolean,
    required: false,
  },
});

module.exports = mongoose.model("addressModel", addressSchema);
