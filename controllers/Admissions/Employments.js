const Entity = require("../../models/Admissions/Employments"),
  Users = require("../../models/Users"),
  Sections = require("../../models/Resources/Sections");

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

      let shouldRefresh = false;

      if (
        employment.status === "approved" &&
        ["HEAD", "MASTER", "VICE"].includes(employment.access)
      ) {
        shouldRefresh = true;
      }

      res.json({
        success,
        payload: {
          user: _user,
          employment: _employment,
        },
        shouldRefresh,
      });
    })
    .catch((error) => res.status(400).json({ error: error.message }));
};

exports.browse = (req, res) => {
  Entity.find({ status: { $in: ["pending", "approved"] } })
    .populate({
      path: "user",
      select:
        "mobile fullName motherTongue dob pob civilStatus isMale address email",
    })
    .sort({ createdAt: -1 })
    .lean()
    .then((employments) => {
      const pending = employments.filter(
        ({ status, isPublished }) => status === "pending" && isPublished
      );

      let taken = {
        access: [],
        HEAD: [],
        MASTER: [],
      };

      if (
        employments.find(
          ({ status, access }) => status === "approved" && access === "VICE"
        )
      ) {
        taken.access.push("VICE");
      }

      const departments = employments.filter(
        ({ status, access }) =>
          status === "approved" && ["HEAD", "MASTER"].includes(access)
      );

      if (!!departments.length) {
        const role = Array.from(
          new Set(departments.map(({ access }) => access))
        );

        for (const key of role) {
          taken[key] = departments
            .filter(({ access }) => access === key)
            .map((d) => d.department);
        }

        if (taken.HEAD.length === 4) {
          taken.access.push("HEAD");
        }

        if (taken.MASTER.length === 4) {
          taken.access.push("MASTER");
        }
      }

      res.json({
        success: "Employments Fetched Successfully.",
        payload: pending,
        taken,
      });
    })
    .catch((error) => res.status(400).json({ error: error.message }));
};

exports.teachers = (req, res) => {
  const { department } = req.query;

  if (!department)
    return res.status(400).json({
      error: "Invalid Parameters",
      message: "Department is required.",
    });

  Entity.find({
    status: "approved",
    access: "TEACHER",
    department,
  })
    .populate({
      path: "user",
      select: "fullName",
    })
    .select("user")
    .sort({ createdAt: -1 })
    .lean()
    .then(async (teachers) =>
      res.json({
        success: "Teachers Found successfully.",
        payload: teachers.map((teach) => ({
          ...teach,
          user: teach.user.fullName,
        })),
      })
    )
    .catch((error) => res.status(400).json({ error: error.message }));
};
