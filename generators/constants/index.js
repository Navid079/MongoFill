module.exports = value => {
  switch (value) {
    case "space":
      return " ";
    case "array":
      return [];
    case "object":
      return {};
    case "hashtag":
      return "#";
    case "at":
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
    case "null":
      return null;
    default:
      throw new Error("5");
  }
};
