const Entity = require("../models/Roles");

const array = [
  {
    _id: "647dd2a5dced91b0b39444b3",
    title: "Administrator",
    access: "Administrator",
  },
  {
    _id: "647dd2a5dced91b0b39444b4",
    title: "Priest",
    access: "Moderator",
  },
  {
    _id: "647dd2a5dced91b0b39444b5",
    title: "Member",
    access: "Member",
  },
];

module.exports = (_, res) =>
  Entity.create(array)
    .then((payload) =>
      res.status(201).json({
        message: "Success",
        payload,
      })
    )
    .catch((err) => res.status(400).json({ message: err.message }));
