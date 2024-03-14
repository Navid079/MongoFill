const fs = require("../../helpers/fs");

const compileModel = content => {
  const lines = content
    .split("\n")
    .map(line => line.trim())
    .filter(line => line);

  const modelArray = lines.map(line => line.split("="));
  if (modelArray.find(item => item.length !== 2)) throw new Error("2");

  const modelObject = Object.fromEntries(modelArray);

  return modelObject;
};

module.exports = async modelPath => {
  const absPath = fs.getAbsolutePath(modelPath);
  if (!fs.isFileExists(absPath)) throw new Error("1");
  const fileContent = await fs.readFile(absPath, "ascii");

  return compileModel(fileContent);
};
