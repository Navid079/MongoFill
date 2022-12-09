"use strict";
const mongoose = require("mongoose");

const app = require("./app");

app().then(() => {
  console.log("Finished");
  mongoose.disconnect();
});
