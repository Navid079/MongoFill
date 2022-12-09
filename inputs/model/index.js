const { promises: fs, existsSync, readFileSync } = require("fs");
const path = require("path");

const getAbsolutePath = modelPath => {
  if (path.win32.isAbsolute(modelPath)) {
    return modelPath;
  } else {
    return path.win32.join(process.cwd(), modelPath);
  }
};

const isFileExists = modelPath => existsSync(modelPath);

const compileModel = content => {
  const lines = content.split("\n");
  const modelArray = lines.map(line => line.split("="));
  if (modelArray.find(item => item.length !== 2)) throw new Error("2");

  const modelObject = Object.fromEntries(modelArray);

  return modelObject;
};

module.exports = modelPath => {
  const absPath = getAbsolutePath(modelPath);
  if (!isFileExists(absPath)) throw new Error("1");
  const fileContent = readFileSync(absPath, "ascii");

  return compileModel(fileContent);
};
