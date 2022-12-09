const calculateRelativeDate = rel => {
  const [v, unit] = [rel.slice(0, -1), rel.slice(-1)];
  const value = +v || 1;
  const transforms = [1000, 60, 60, 24];
  const units = ["s", "m", "h", "d"];

  const unitIndex = units.findIndex(item => item === unit);
  let timestamp = +new Date();
  let range = value;
  for (let i = 0; i <= unitIndex; i++) {
    range *= transforms[i];
  }
  timestamp += range;

  return timestamp;
};

const getDate = (from, to) => {
  const fromDate = calculateRelativeDate(from);
  const toDate = calculateRelativeDate(to);

  const randomTime = Math.floor(Math.random() * (toDate - fromDate)) + fromDate;

  return new Date(randomTime);
};

module.exports = getDate;
