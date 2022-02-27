const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addressSchema = new Schema({
  city: { type: String, required: true },
  street: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  flatNumber: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("addressModel", addressSchema);
