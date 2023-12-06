const router = require("express").Router(),
  {
    browse,
    save,
    update,
    teachers,
    faculty,
  } = require("../../controllers/Admissions/Employments"),
  { validate } = require("../../middleware/jwt");

router
  .get("/browse", validate, browse)
  .get("/faculty", validate, faculty)
  .get("/teachers", validate, teachers)
  .post("/save", validate, save)
  .put("/update", validate, update);

module.exports = router;
