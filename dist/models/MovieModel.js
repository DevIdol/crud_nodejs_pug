"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const MovieSchema = new mongoose_1.Schema({
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
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Movies", MovieSchema);
//# sourceMappingURL=MovieModel.js.map