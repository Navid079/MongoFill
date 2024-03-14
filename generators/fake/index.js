const { faker } = require("@faker-js/faker");

module.exports = value => {
  switch (value) {
    case "firstname":
      return faker.name.firstName();
    case "lastname":
      return faker.name.lastName();
    case "username":
      return faker.internet.userName();
    case "email":
      return faker.internet.email();
    case "country":
      return faker.address.country();
    case "url":
      return faker.internet.url();
    case "avatar":
      return faker.internet.avatar();
    case "btcAddress":
      return faker.finance.bitcoinAddress().replace("0x", "");
    case "ethAddress":
      return faker.finance.ethereumAddress().replace("0x", "");
    default:
      throw new Error("6");
  }
};
