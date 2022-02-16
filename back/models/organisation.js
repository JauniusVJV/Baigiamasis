const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const organisationSchema = new Schema({
  orgTitle: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  codeVAT: {
    type: String,
    required: false,
  },
  addressID: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("organisationModel", organisationSchema);
