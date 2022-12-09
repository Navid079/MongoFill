const fs = require("../../helpers/fs");

const cache = {};

const compileFile = content => {
  try {
    const lines = content.split("\n");
    const data = lines
      .map(line => {
        try {
          return JSON.parse(line);
        } catch (err) {
          return null;
        }
      })
      .filter(item => item !== null);

    return data;
  } catch (err) {
    return [""];
  }
};

module.exports = async filePath => {
  const absPath = fs.getAbsolutePath(filePath);
  const alternate = absPath + ".dat";

  if (cache[absPath]) {
    return cache[absPath];
  }

  if (!fs.isFileExists(absPath) && !fs.isFileExists(alternate)) {
    cache[absPath] = [""];
  } else {
    const content = fs.isFileExists(absPath)
      ? await fs.readFile(absPath, "ascii")
      : await fs.readFile(alternate, "ascii");

    const compiled = compileFile(content);
    cache[absPath] = compiled;
  }

  return cache[absPath];
};
