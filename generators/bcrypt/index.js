const bcrypt = require("bcrypt");

module.exports = async input => {
  const value = input.slice(1);

  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(value, salt);

  return hash;
};
