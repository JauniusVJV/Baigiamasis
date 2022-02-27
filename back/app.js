const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());
app.listen(4000);

mongoose
  .connect(
    "mongodb+srv://adminas1:adminas1@cluster0.r14ou.mongodb.net/WaDeS?retryWrites=true&w=majority"
  )
  .then((res) => {
    console.log("Connection to database - OK. ");
  })
  .catch((e) => {
    console.log(e);
  });

const router = require("./routes/main");
app.use("/", router);
