const Entity = require("../models/Users"),
  // Enrollments = require("../models/Admissions/Enrollments"),
  Employments = require("../models/Admissions/Employments"),
  Sections = require("../models/Resources/Sections"),
  generateToken = require("../config/generateToken"),
  fs = require("fs");

const fetchAccess = async (user) => {
  let access = undefined,
    credentials = await Employments.findOne({ user }).select("-updatedAt -__v");

  if (credentials) {
    access = credentials.access;
  } else {
    // credentials = await Enrollments.findOne({ user })
    //   .select("-updatedAt -__v")
    //   .populate({
    //     path: "course",
    //     select: "pk",
    //   })
    //   .populate("section");
    // access = "STUDENT";
  }

  // const [employment, enrollment] = await Promise.all([, ,]);

  // if (employment) {
  //   if (employment.status === "approved") access = employment.access;
  //   let section = undefined;
  //   if (employment.access === "TEACHER")
  //     section = await Sections.findOne({ adviser: employment._id }).populate({
  //       path: "course",
  //       select: "pk",
  //     });
  //   credentials = { ...employment._doc, section };
  // } else if (enrollment) {
  //   credentials = enrollment;
  // }

  return { access, credentials };
};

exports.login = (req, res) => {
  const { email, password } = req.query;

  Entity.findOne({ email })
    .select("-createdAt -updatedAt -__v")
    .then(async (item) => {
      if (!item)
        return res.status(404).json({
          error: "User Not Found",
          message: "The provided Credentials does not exist.",
        });

      if (!item.isActive)
        return res.status(400).json({
          error: "Account Deactivated",
          message: "Contact the Admnistrator",
        });

      if (!(await item.matchPassword(password)))
        return res.status(400).json({
          error: "Invalid Credentials",
          message: "The provided Credentials does not match.",
        });

      res.json({
        success: "Login Success",
        payload: {
          user: {
            ...item._doc,
            password: undefined,
          },
          ...(await fetchAccess(item._id)),
          token: generateToken({ _id: item._id }),
        },
      });
    })
    .catch((error) => res.status(400).json({ error: error.message }));
};

exports.upload = (req, res) => {
  const { path, base64, name } = req.body;
  const url = `./assets/${path}`;
  if (!fs.existsSync(url)) {
    fs.mkdirSync(url, { recursive: true });
  }
  try {
    fs.writeFileSync(`${url}/${name}`, base64, "base64");
    return res.json({ message: "File Uploaded Successfully" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
