import mongoose from "mongoose";


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

export default mongoose.model("codingSkills", codingSkillSchema);