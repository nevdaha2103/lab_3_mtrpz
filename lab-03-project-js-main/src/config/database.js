module.exports = {
    development: {
      username: "admin",
      password: "secret",
      database: "library",
      host: "postgres",
      dialect: "postgres",
    },
    production: {
      use_env_variable: "DATABASE_URL",
      dialect: "postgres",
      dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
    },
  };