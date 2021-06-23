//console.log(process.env.NODE_ENV);
const environment = process.env.NODE_ENV || "development";
const config = {};

if (environment === "production") {
  config.secret_key = process.env.SECRET_KEY_PROD;
  config.mongo_uri = process.env.MONGO_ATLAS;
  config.environment = environment;
} else {
  config.secret_key = process.env.SECRET_KEY;
  config.mongo_uri = process.env.MONGO_ATLAS;
  config.environment = environment;
  console.log(environment);
}
//console.log(config);
module.exports = config;
