const Entity = require("../../models/Admissions/Employments"),
  Users = require("../../models/Users");

exports.save = async (req, res) => {
  const { user, employment } = req.body;
  let _user = undefined;

  if (user) {
    _user = await Users.findByIdAndUpdate(employment.user, user, {
      new: true,
    }).select("-password");
  }

  Entity.create(employment)
    .then((_employment) => {
      var success =
        "The form has been submitted; please await validation by the principal.";

      if (!employment.isPublished) success = "Form draft saved.";

      res.status(201).json({
        success,
        payload: {
          user: _user,
          employment: _employment,
        },
      });
    })
    .catch((error) => res.status(400).json({ error: error.message }));
};

exports.update = async (req, res) => {
  const { user, employment } = req.body;
  let _user = undefined;

  if (user) {
    _user = await Users.findByIdAndUpdate(employment.user, user, {
      new: true,
    }).select("-password");
  }

  Entity.findByIdAndUpdate(employment._id, employment, { new: true })
    .then((_employment) => {
      var success =
        "The form has been submitted; please await validation by the principal.";

      if (!employment.isPublished) success = "Form draft updated.";

      res.json({
        success,
        payload: {
          user: _user,
          employment: _employment,
        },
      });
    })
    .catch((error) => res.status(400).json({ error: error.message }));
};

exports.browse = (req, res) => {
  Entity.find(req.query)
    .populate({
      path: "user",
      select: "mobile fullName motherTongue dob pob civilStatus isMale address",
    })
    .sort({ createdAt: -1 })
    .lean()
    .then((payload) =>
      res.json({
        success: "Employments Fetched Successfully.",
        payload,
      })
    )
    .catch((error) => res.status(400).json({ error: error.message }));
};
