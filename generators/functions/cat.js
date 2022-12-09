module.exports = async (params, generate) => {
  let result = "";

  for (let par of params) {
    const generated = await generate(par);
    result += generated;
  }

  return result;
};
