const Entity = require("../../models/Admissions/Enrollments"),
  Users = require("../../models/Users"),
  handleQuery = require("../../config/query");

exports.save = async (req, res) => {
  const { user, enrollment } = req.body;
  let _user = undefined;

  if (user) {
    _user = await Users.findByIdAndUpdate(enrollment.user, user, {
      new: true,
    }).select("-password");
  }

  Entity.create(enrollment)
    .then((_enrollment) => {
      var success =
        "The form has been submitted; please await validation by the enrollment teacher.";

      if (!enrollment.isPublished) success = "Form draft saved.";

      res.status(201).json({
        success,
        payload: {
          user: _user,
          enrollment: _enrollment,
        },
      });
    })
    .catch((error) => res.status(400).json({ error: error.message }));
};

exports.update = async (req, res) => {
  const { user, enrollment, isViewing = false } = req.body;
  let _user = undefined;

  if (user) {
    _user = await Users.findByIdAndUpdate(enrollment.user, user, {
      new: true,
    }).select("-password");
  }

  Entity.findByIdAndUpdate(enrollment._id, enrollment, { new: true })
    .then((_enrollment) => {
      var success =
        "The form has been submitted; please await validation by the enrollment teacher.";

      if (!enrollment.isPublished) success = "Form draft updated.";

      res.json({
        success,
        payload: {
          user: _user,
          enrollment: _enrollment,
        },
        isViewing,
      });
    })
    .catch((error) => res.status(400).json({ error: error.message }));
};

exports.browse = (req, res) =>
  Entity.find(handleQuery(req.query))
    .populate({
      path: "user",
      select:
        "fullName address guardians psa isMale dob pob indigenousPeople disability motherTounge mobile 4ps lrn email",
    })
    .populate({
      path: "course",
      select: "pk",
    })
    .sort({ createdAt: -1 })
    .lean()
    .then((payload) =>
      res.json({
        success: "Students Fetched Successfully.",
        payload,
      })
    )
    .catch((error) => res.status(400).json({ error: error.message }));
