const fs = require("../../helpers/fs");

const toSave = {};

exports.initialize = saves => {
  if (!saves) return;

  try {
    toSave = Object.fromEntries(
      saves
        .map(item => item.split(":"))
        .map(([prop, name]) => [
          prop,
          fs.wstream(fs.getAbsolutePath(name) + ".dat"),
        ])
    );
  } catch (err) {
    console.log(`Save switch cannot accept value`);
    throw err;
  }
};

exports.save = bundle => {
  bundle.forEach(item => {
    Object.keys(toSave).forEach(key => {
      toSave[key].write(JSON.stringify(item[key] + "\n"));
    });
  });
};
