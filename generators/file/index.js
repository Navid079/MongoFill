const parseFile = require("../../inputs/file");

module.exports = async value => {
  const content = await parseFile(value);
  const options = content.length;
  const select = Math.floor(Math.random() * options);

  return content[select];
};
