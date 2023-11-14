module.exports = (app) => {
  // List of available Routes
  require("../migrations/Routes")(app);
  app.use("/users", require("./Users"));
  app.use("/auth", require("./Auth"));
  app.use("/violations", require("./Violations"));
  app.use("/announcements", require("./Announcements"));
  app.use("/chats", require("./Chats"));
  app.use("/warnings", require("./Warnings"));
  app.use("/messages", require("./Messages"));
};
