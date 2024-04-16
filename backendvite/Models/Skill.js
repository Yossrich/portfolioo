import mongoose from "mongoose";

const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
     
    
    },
    description: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    domain: {
      type: String,
      required: true,
      
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("skills", skillSchema);