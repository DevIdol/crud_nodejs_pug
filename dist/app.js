"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const swaggerUI = __importStar(require("swagger-ui-express"));
const YAML = __importStar(require("yamljs"));
const ErrorHandler_1 = __importDefault(require("./middlewares/ErrorHandler"));
const MovieRoute_1 = __importDefault(require("./routes/MovieRoute"));
dotenv_1.default.config();
const swaggerPath = path_1.default.join(__dirname, "../swagger/app.yaml");
const swaggerDocument = YAML.load(swaggerPath);
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
//swagger
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.get("/", (req, res) => {
    res.redirect("/api/movies");
});
//route api
app.use("/api/movies", MovieRoute_1.default);
//middleware errorhandler
app.use(ErrorHandler_1.default);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//# sourceMappingURL=app.js.map