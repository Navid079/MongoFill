#!/usr/bin/env node

"use strict";
const mongoose = require("mongoose");

const app = require("./app");

if (require.main === module) {
  app().then(() => {
    console.log("Finished");
    mongoose.disconnect();
  });
}
