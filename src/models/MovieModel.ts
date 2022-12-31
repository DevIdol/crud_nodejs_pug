import { Schema, model } from "mongoose";
import { CreateMovie } from "../interface/MovieInterface";

const MovieSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
        },
        year: {
            type: Number,
            trim: true,
            required: true,
        },
        rating: {
            type: String,
            trim: true,
            requiredt: true,
        },
    },
    { timestamps: true }
);

export default model<CreateMovie>("Movies", MovieSchema);
