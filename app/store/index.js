const mongoose = require("mongoose");

const schema = new mongoose.Schema({}, { strict: false });

module.exports = async (bundle, collection) => {
  const model = mongoose.model(collection, schema);
  await model.insertMany(bundle);
};
