const concat = require("./cat");

const read_name = 0;
const read_pars = 1;
const halt = 2;

const compileFunction = func => {
  let state = read_name;

  let name = "";
  let pars = [];
  let buffer = "";

  for (let c of func) {
    if (state === read_name) {
      if (c === "(") state = read_pars;
      else name += c;
    } else if (state === read_pars) {
      if (c === ";") {
        if (!buffer) throw new Error("7");
        const par = buffer.trim();
        pars.push(par);
        buffer = "";
      } else if (c === ")") {
        if (buffer) {
          const par = buffer.trim();
          pars.push(par);
        }
        state = halt;
      } else buffer += c;
    } else throw new Error("8");
  }

  return [name, pars];
};

const functions = async (input, generate) => {
  const value = input.slice(1);

  const [name, pars] = compileFunction(value);
  if (name === "cat") return await concat(pars, generate);
};

module.exports = functions;
