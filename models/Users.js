const mongoose = require("mongoose"),
  bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    fullName: {
      fname: {
        type: String,
        required: true,
      },
      mname: {
        type: String,
        default: "",
        trim: true,
      },
      lname: {
        type: String,
        required: true,
      },
      suffix: {
        type: String,
        default: "",
      },
    },
    address: {
      isSame: {
        type: Boolean,
        default: true,
      },
      current: {
        street: {
          type: String,
          trim: true,
          default: "",
        },
        barangay: {
          type: String,
          trim: true,
          default: "",
        },
        city: {
          type: String,
          required: true,
        },
        province: {
          type: String,
          required: true,
        },
        region: {
          type: String,
          required: true,
        },
        zip: {
          type: String,
          trim: true,
          default: "",
        },
      },
      permanent: {
        street: {
          type: String,
          trim: true,
          default: "",
        },
        barangay: {
          type: String,
          trim: true,
          default: "",
        },
        city: {
          type: String,
          trim: true,
          default: "",
        },
        province: {
          type: String,
          trim: true,
          default: "",
        },
        region: {
          type: String,
          trim: true,
          default: "",
        },
        zip: {
          type: String,
          trim: true,
          default: "",
        },
      },
    },
    dob: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    isMale: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    deactivated: {
      by: {
        type: String,
        default: "",
        trim: true,
      },
      at: {
        type: String,
        default: "",
        trim: true,
      },
      for: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Violations",
      },
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
