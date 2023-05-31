// entidad films => title, year, director, image
import mongoose from "mongoose";

const FilmScheme = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    year: {
      type: Number,
    },
    director: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
    versionKey: false,
  }
);

export default mongoose.model("films", FilmScheme);
