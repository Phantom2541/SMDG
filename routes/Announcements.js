const router = require("express").Router(),
  { browse, save, update, destroy } = require("../controllers/Announcements"),
  { validate } = require("../middleware/jwt");

router
  .get("/browse", browse)
  .post("/save", save)
  .put("/update", update)
  .delete("/destroy", destroy);

module.exports = router;
