const connections = require("../connections");
const args = require("../inputs/args");
const model = require("../inputs/model");
const bundler = require("./bundler");
const store = require("./store");
const save = require("./save");

const main = async () => {
  // Compile Program Arguments
  const argv = args(process.argv);

  // Compile Data Model
  const compiled = await model(argv.model);

  // Connect to database
  await connections(argv);

  // Initialize File Writer Streams
  save.initialize(argv.save);

  // Start job in batches
  await Promise.all(
    Array.from({ length: Math.ceil(argv.count / 100) }, async (_, i) => {
      const n = Math.min(argv.count - i * 100, 100);

      const bundle = await bundler(compiled, n);
      return store(bundle, argv.collection);
    })
  );
};

module.exports = main;
