"use strict";

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const info = require("../../messages/info");

module.exports = argv => {
  const compiled = yargs(hideBin(argv))
    .usage(info.argsUsage)
    .alias("u", "username")
    .alias("p", "password")
    .alias("h", "host")
    .alias("p", "port")
    .alias("d", "database")
    .alias("c", "collection")
    .alias("m", "model")
    .alias("n", "count")
    .alias("s", "save")
    .alias("i", "save-id")
    .array("save")
    .boolean("save-id")
    .demandOption(["host", "collection", "model"]).argv;

  return compiled;
};
