const random = require("./randoms");
const constant = require("./constants");

const generate = value => {
  if (typeof value !== "string") return value;

  const type = value[0];

  switch (type) {
    case "#":
      return generate(random(value));
    case "-":
      return generate(constant(value));
    default:
      return value;
  }
};

module.exports = generate;
