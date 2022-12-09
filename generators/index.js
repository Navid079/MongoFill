const random = require("./randoms");
const constant = require("./constants");
const bcrypt = require("./bcrypt");
const faker = require("./fake");
const funcs = require("./functions");

const generate = async value => {
  if (typeof value !== "string") return value;

  const type = value[0];

  switch (type) {
    case "#":
      return generate(random(value));
    case "-":
      return generate(constant(value));
    case "!":
      return bcrypt(value);
    case "$":
      return generate(faker(value));
    case "*":
      return generate(funcs(value, generate));
    default:
      return value;
  }
};

module.exports = generate;
