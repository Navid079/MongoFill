"use strict";

// Core modules
const fs = require("fs/promises");
const path = require("path");

// Module components
const dbConnect = require("./connections/db-connection");

console.log('first')
dbConnect({ host: "0.0.0.0", database: "test" }).then(result => {
  console.log(result.url);
});
