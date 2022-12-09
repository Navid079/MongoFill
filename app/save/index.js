const fs = require("../../helpers/fs");

const toSave = {};

exports.initialize = saves => {
  if (!saves) return;

  for (let item of saves) {
    try {
      const [prop, name] = item.split(":");
      toSave[prop] = fs.wstream(fs.getAbsolutePath(name) + ".dat");
    } catch (err) {
      console.log(`Save switch cannot accept value: ${item}`);
      throw err;
    }
  }
};

exports.save = bundle => {
  for (let item of bundle) {
    for (let key of Object.keys(toSave)) {
      toSave[key].write(JSON.stringify(item[key]) + "\n");
    }
  }
};
