const Entity = require("../../models/Resources/Sections"),
  Employments = require("../../models/Admissions/Employments");

exports.save = (req, res) => {
  const { adviser, name, gradeLvl, department } = req.body;

  if (!name || !gradeLvl || !department)
    return res.status(400).json({
      error: "Invalid Parameters",
      message: "Department, Name and Grade level are required.",
    });

  Entity.findOne({ gradeLvl, department, name }).then((existing) => {
    if (existing)
      return res.status(409).json({
        error: "Duplicate Entry",
        message: `${name} is already used by ${department} ${gradeLvl}`,
      });

    Entity.create(req.body)
      .then(async (payload) => {
        let _adviser = undefined,
          affectedSection = undefined;

        if (adviser) {
          const duplicateAdviser = await Entity.findOne({ adviser });

          if (
            duplicateAdviser &&
            String(duplicateAdviser._id) !== String(payload._id)
          ) {
            affectedSection = await Entity.findByIdAndUpdate(
              affectedAdviser._id,
              { adviser: null },
              { new: true }
            );
          }

          const employment = await Employments.findById(adviser).populate({
            path: "user",
            select: "fullName",
          });

          _adviser = {
            _id: employment._id,
            fullName: employment?.user?.fullName,
          };
        }

        res.status(201).json({
          success: "Section Added Successfully.",
          payload: { ...payload._doc, adviser: _adviser },
          affectedSection,
        });
      })
      .catch((error) => res.status(400).json({ error: error.message }));
  });
};

exports.browse = (req, res) => {
  const { department, gradeLvl } = req.query;

  if (!department || !gradeLvl)
    return res.status(400).json({
      error: "Invalid Parameters",
      message: "Department and Grade Level are required.",
    });

  Entity.find({ department, gradeLvl })
    .select("-createdAt -updatedAt -__v")
    .populate({
      path: "adviser",
      select: "user",
      populate: {
        path: "user",
        select: "fullName",
      },
    })
    .sort({ createdAt: -1 })
    .lean()
    .then((payload) =>
      res.json({
        success: "Sections Fetched Successfully.",
        payload: payload.map((section) => ({
          ...section,
          adviser: {
            _id: section.adviser?._id,
            fullName: section?.adviser?.user?.fullName,
          },
        })),
      })
    )
    .catch((error) => res.status(400).json({ error: error.message }));
};

exports.update = (req, res) =>
  Entity.findByIdAndUpdate(req.body._id, req.body, {
    new: true,
  })
    .populate({
      path: "adviser",
      select: "user",
      populate: {
        path: "user",
        select: "fullName",
      },
    })
    .then((payload) => {
      if (!payload)
        return res.status(404).json({
          error: "Invalid ID.",
          message: "ID Not Found.",
        });

      let adviser = undefined;

      if (payload.adviser) {
        adviser = {
          _id: payload.adviser._id,
          fullName: payload.adviser?.user?.fullName,
        };
      }

      res.json({
        success: "Section Updated Successfully.",
        payload: { ...payload._doc, adviser },
      });
    })
    .catch((error) => res.status(400).json({ error: error.message }));

exports.destroy = (req, res) =>
  Entity.findByIdAndDelete(req.body._id)
    .then((payload) => {
      if (!payload)
        return res.status(404).json({
          error: "Invalid ID.",
          message: "ID Not Found.",
        });

      res.json({
        success: "Section Deleted Successfully.",
        payload,
      });
    })
    .catch((error) => res.status(400).json({ error: error.message }));
