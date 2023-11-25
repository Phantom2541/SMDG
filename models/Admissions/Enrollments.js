const mongoose = require("mongoose");

const modelSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    gradeLvl: {
      type: Number,
      min: 1,
      max: 16,
      required: true,
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

const Entity = mongoose.model("Enrollments", modelSchema);

module.exports = Entity;
