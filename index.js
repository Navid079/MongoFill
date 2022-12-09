"use strict";

// Core modules
const fs = require("fs/promises");
const path = require("path");

// Module components
const dbConnect = require("./connections/db-connection");
const args = require("./inputs/args");

const argv = args(process.argv);
const { username, password, host, port, database } = argv;

dbConnect({ username, password, host, port, database }).then(result => {
  console.log(result.url);
});
