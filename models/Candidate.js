const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    gender: {
      type: String,
      required: true,
    },

    university: {
      type: String,
      required: true,
    },

    degree: {
      type: String,
      required: true,
    },

    interest: {
      type: String,
      required: true,
    },

    domain: {
      type: String,
      required: true,
    },

    groupId: {
      type: Number,
      required: true,
    },

    role: {
      type: String,
      default: "Member",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Candidate", candidateSchema);