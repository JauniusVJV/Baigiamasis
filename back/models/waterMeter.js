const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const waterMeterSchema = new Schema({
  wmNumber: {
    type: String,
    required: true,
  },
  userID: {
    type: String,
    required: true,
  },
  otherInfo: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("waterMeterModel", waterMeterSchema);
