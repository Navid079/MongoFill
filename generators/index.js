const random = require("./randoms");
const constant = require("./constants");
const bcrypt = require("./bcrypt");
const faker = require("./fake");
const funcs = require("./functions");
const file = require("./file");

const generate = async value => {
  if (typeof value !== "string") return value;

  const type = value[0];

  switch (type) {
    case "#":
      return random(generate(value.slice(1)));
    case "-":
      return constant(generate(value.slice(1)));
    case "!":
      return bcrypt(generate(value.slice(1)));
    case "$":
      return faker(generate(value.slice(1)));
    case "*":
      return funcs(value.slice(1), generate);
    case "@":
      return generate(await file(value.slice(1)));
    default:
      return value;
  }
};

module.exports = generate;
