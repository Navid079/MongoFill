const connections = require("../connections");
const args = require("../inputs/args");
const model = require("../inputs/model");
const bundler = require("./bundler");
const store = require("./store");
const save = require("./save");

const generateAndStore = async (compiled, n, collection) => {
  const bundle = await bundler(compiled, n);
  return store(bundle, collection);
};

const main = async () => {
  const argv = args(process.argv);

  const compiled = await model(argv.model);
  await connections(argv);

  save.initialize(argv.save);
  const promises = [];

  for (let i = 0; i < Math.floor(argv.count / 100); i++) {
    let n = (i + 1) * 100;
    if (n > argv.count) n = argv.count - i * 100;
    else n = 100;
    const promise = generateAndStore(compiled, n, argv.collection);
    promises.push(promise);
  }

  return Promise.all(promises);
};

module.exports = main;
