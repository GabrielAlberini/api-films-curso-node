import mongoose from "mongoose";

const FileScheme = new mongoose.Schema(
  {
    url: {
      type: String,
    },
    filename: {
      type: String,
    },
  },
  {
    timestamps: true, //createdAt, updatedAt
    versionKey: false,
  }
);

export default mongoose.model("file", FileScheme);
