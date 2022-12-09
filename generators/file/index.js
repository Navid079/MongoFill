const parseFile = require("../../inputs/file");

module.exports = async input => {
  const value = input.slice(1);

  const content = await parseFile(value);
  const options = content.length;
  const select = Math.floor(Math.random() * options);

  return content[select];
};
