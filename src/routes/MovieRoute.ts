import express, { Router, Request, Response } from "express";
import {
    getMovies,
    createMovie,
    updateMovie,
    deleteMovie,
    findMovie,
    editMovie,
} from "../controllers/MovieController";

const router: Router = express.Router();

//new add from load
router.get("/add", function (req: Request, res: Response) {
    res.render("add_movies");
});

//edit form load
router.get("/edit/:id", editMovie);

router.get("/", getMovies);

router.post("/", createMovie);

router.post("/:id", updateMovie);

router.delete("/:id", deleteMovie);

router.get("/:id", findMovie);

export default router;
