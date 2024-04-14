const mongoose = require ("mongoose");

const codingSkillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    level: {
      type: Number,
      required: true,
    },
    domain: {
      type: String,
      required: true,
      enum: ["backend", "frontend", "devops"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("skills", codingSkillSchema);