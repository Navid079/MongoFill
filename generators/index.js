const random = require("./randoms");
const constant = require("./constants");
const bcrypt = require("./bcrypt");

const generate = async value => {
  if (typeof value !== "string") return value;

  const type = value[0];

  switch (type) {
    case "#":
      return generate(random(value));
    case "-":
      return generate(constant(value));
    case "!":
      return generate(await bcrypt(value));
    default:
      return value;
  }
};

module.exports = generate;
