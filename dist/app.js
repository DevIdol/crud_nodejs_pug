"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const ErrorHandler_1 = __importDefault(require("./middlewares/ErrorHandler"));
const MovieRoute_1 = __importDefault(require("./routes/MovieRoute"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
// view engine
app.set("view engine", "pug");
app.set("views", path_1.default.join(__dirname, "views"));
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
//middleware
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
//db
mongoose_1.default.set("strictQuery", true);
mongoose_1.default
    .connect(process.env.MONGODB || "")
    .then(() => console.log(`MongoDB Connected!`))
    .catch((error) => console.log(`Couldn't connect to MongoDB!`, error));
app.get("/", (req, res) => {
    res.redirect("/movies");
});
//route api
app.use("/movies", MovieRoute_1.default);
//middleware errorhandler
app.use(ErrorHandler_1.default);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//# sourceMappingURL=app.js.map