const router = require("express").Router(),
  users = require("./Users");

module.exports = (app) => {
  app.use("/migrate", router.post("/users", users));
};
