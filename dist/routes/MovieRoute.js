"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const MovieController_1 = require("../controllers/MovieController");
const router = express_1.default.Router();
//new add from load
router.get("/add", function (req, res) {
    res.render("add_movies");
});
//edit form load
router.get("/edit/:id", MovieController_1.editMovie);
router.get("/", MovieController_1.getMovies);
router.post("/", MovieController_1.createMovie);
router.post("/:id", MovieController_1.updateMovie);
router.delete("/:id", MovieController_1.deleteMovie);
router.get("/:id", MovieController_1.findMovie);
exports.default = router;
//# sourceMappingURL=MovieRoute.js.map