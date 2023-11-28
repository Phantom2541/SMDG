const Entity = require("../../models/Admissions/Employments");

exports.save = (req, res) => {
  console.log(req.body);
  // Entity.create(req.body)
  // .then((payload) =>
  //   res.status(201).json({
  //     success:
  //       "The form has been submitted; please await validation by the principal.",
  //     payload,
  //   })
  // )
  // .catch((error) => res.status(400).json({ error: handleDuplicate(error) }));
};
