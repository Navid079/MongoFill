const generate = require("../../generators");

module.exports = async (compiled, count) => {
  const bundle = [];
  for (let i = 0; i < count; i++) {
    const data = {};
    for (let [name, value] of Object.entries(compiled)) {
      const res = await generate(value);
      data[name] = res;
    }
    bundle.push(data);
  }

  return bundle;
};
