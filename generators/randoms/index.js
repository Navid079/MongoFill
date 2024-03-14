const randomString = require("./string");
const randomDate = require("./date");

const getRange = (range, dateRange) => {
  const regex = new RegExp(
    "([^\\+\\-0-9 \\{\\}," + (dateRange ? "smhd" : "") + "])"
  );
  if (range.match(regex)) throw new Error("3");

  const output = range
    .replace(/[\{\}]/g, "")
    .trim()
    .replace(/ *, */g, ",")
    .split(",");

  if (output.length < 1 || output.length > 2) throw new Error("4");
  return output;
};

const generateRandom = (type, min, max) => {
  const length = Math.floor(Math.random() * (max - min)) + +min;

  if (type === "string") return randomString(length);
  if (type === "date") return randomDate(min, max);
  if (type === "integer") return length;
  if (type === "number") return Math.random() + length;
};

module.exports = value => {
  const [type, range] = value.split("{");
  const [min, max] = getRange(range, type === "date");

  return generateRandom(type, min, max || min);
};
