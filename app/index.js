const generate = require("../generators");
const connections = require("../connections");
const args = require("../inputs/args");
const model = require("../inputs/model");

const main = async () => {
  const argv = args(process.argv);

  const compiledModel = await model(argv.model);
  const mongooseConnection = await connections(argv);

  for (let [name, value] of Object.entries(compiledModel)) {
    const res = await generate(value);
    console.log(name, res);
  }
};

module.exports = main;
