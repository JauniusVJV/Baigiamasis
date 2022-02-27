const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const waterDataSchema = new Schema({
  waterMeterID: {
    type: String,
    required: true,
  },
  data: {
    type: Number,
    required: true,
  },
  scanDate: {
    type: Number,
    required: true,
  },
  otherInfo: {
    type: String,
    required: false,
  },
  locked: {
    type: Boolean,
    required: false,
  },
  deleted: {
    type: Boolean,
    required: false,
  },
});

module.exports = mongoose.model("waterDataModel", waterDataSchema);
