const defaultChars =
  "abcbefghijklmnopqrstuvwxyz" + "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "1234567890";

const randomString = (len, chars = defaultChars, s = "") => {
  if (len === 0) return s;
  const char = chars[Math.floor(Math.random() * chars.length)];
  return randomString(len - 1, chars, s + char);
};

module.exports = randomString;
