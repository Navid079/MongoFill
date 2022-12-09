"use strict";

// Core modules
const fs = require("fs/promises");
const path = require("path");

// Module components
const dbConnect = require("./connections/db-connection");
const args = require("./inputs/args");
const modelCompiler = require("./inputs/model");

// start point
const start = async () => {
  const argv = args(process.argv);
  const { username, password, host, port, database, model } = argv;

  const compiledModel = modelCompiler(model);

  const mongooseConnection = await dbConnect({
    username,
    password,
    host,
    port,
    database,
  });
};

start();
