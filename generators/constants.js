module.exports = name => {
  switch (name.toLowerCase()) {
    case "array":
      return [];
    case "object":
      return {};
    case "hashtag":
      return "#";
    case "atsign":
      return "@";
    case "dollar":
      return "$";
    case "dash":
      return "-";
    case "true":
      return true;
    case "false":
      return false;
    case "now":
      return new Date();
  }
};
