const random = require("./randoms");

module.exports = value => {
  if (value.startsWith("#")) return random(value);

  return value;
};
