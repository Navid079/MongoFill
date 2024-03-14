"use strict";

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const createCredentials = (username, password) =>
  username ? `${username}:${password}@` : "";

const createSocketAddress = (host, port) => `${host}:${port || 27017}`;

const createUrl = (username, password, host, port, database) =>
  `mongodb://${createCredentials(username, password)}${createSocketAddress(
    host,
    port
  )}/${database || "mongofill-testdb"}`;

module.exports = async ({ username, password, host, port, database }) => {
  const url = createUrl(username, password, host, port, database);
  const connection = await mongoose.connect(url);
  return { connection, url };
};
