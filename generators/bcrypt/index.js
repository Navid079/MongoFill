const bcrypt = require("bcrypt");

module.exports = async value => {
  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(value, salt);

  return hash;
};
