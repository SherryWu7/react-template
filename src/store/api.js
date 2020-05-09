const versionEnv = process.env.VERSION_ENV || "prod";

let api = {};
api.dev = require("./api.dev");
api.sit = require("./api.sit");
api.prod = require("./api.prod");

module.exports = {
  config: {
    env: versionEnv,
    api,
  },
};
