const { promises: fs, existsSync } = require("fs");
const path = require("path/win32");

exports.getAbsolutePath = filePath => {
  if (path.isAbsolute(filePath)) {
    return filePath;
  } else {
    return path.win32.join(process.cwd(), filePath);
  }
};

exports.isFileExists = filePath => existsSync(filePath);
exports.readFile = fs.readFile;
