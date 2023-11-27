const mongoose = require("mongoose");

// files
// assets/employments/email/

const modelSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    access: {
      type: String,
      enum: {
        values: [
          "PRINCIPAL",
          "VICE PRINCIPAL",
          "HEAD",
          "MASTER",
          "TEACHER",
          "REGISTRAR",
          "CASHIER",
          "GUIDANCE",
          "OTHERS",
        ],
        message: "Please choose a valid type from the predefined options.",
      },
      default: "OTHERS",
    },
    emergencyContact: {
      primary: {
        name: {
          type: String,
          required: true,
          trim: true,
        },
        relationship: {
          type: String,
          required: true,
          trim: true,
        },
        mobile: {
          type: String,
          required: true,
          trim: true,
        },
      },
      secondary: {
        name: {
          type: String,
          trim: true,
        },
        relationship: {
          type: String,
          trim: true,
        },
        mobile: {
          type: String,
          trim: true,
        },
      },
    },
    status: {
      type: String,
      enum: {
        values: ["pending", "approved", "rejected"],
        message: "Please choose a valid type from the predefined options.",
      },
      default: "pending",
    },
    remarks: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Entity = mongoose.model("Employments", modelSchema);

module.exports = Entity;
