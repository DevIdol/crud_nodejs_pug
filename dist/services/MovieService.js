"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findMovieService = exports.deleteMovieService = exports.updateMovieService = exports.editMovieService = exports.createMovieService = exports.getMovieService = void 0;
const MovieModel_1 = __importDefault(require("../models/MovieModel"));
//get movies
const getMovieService = async (req, res, next) => {
    try {
        const year = req.query.year;
        let movieData;
        if (year) {
            movieData = await MovieModel_1.default.find({ year });
        }
        else {
            movieData = await MovieModel_1.default.find();
        }
        let movies = movieData.slice().reverse();
        res.render("index", {
            title: "Movie List",
            movies,
        });
        // res.status(200).json({
        //     message: "success",
        //     data: movies,
        // });
    }
    catch (error) {
        // next(createError(500, "Something Wrong!"));
        res.render("not_found", {
            error: error,
        });
    }
};
exports.getMovieService = getMovieService;
//create movie
const createMovieService = async (req, res, next) => {
    try {
        let newMovie = new MovieModel_1.default(req.body);
        await newMovie.save();
        res.redirect("/movies");
        // res.status(201).json({
        //     message: "success",
        //     data: savedMovie,
        // });
    }
    catch (error) {
        // next(createError(500, "Something Wrong!"));
        res.render("not_found", {
            error: error,
        });
    }
};
exports.createMovieService = createMovieService;
//Edit From Load
const editMovieService = async (req, res, next) => {
    try {
        const movie = await MovieModel_1.default.findById(req.params.id);
        res.render("edit_movies", {
            movie: movie,
        });
    }
    catch (error) {
        // next(createError(500, "Something Wrong!"));
        res.render("not_found", {
            error: error,
        });
    }
};
exports.editMovieService = editMovieService;
//update movie
const updateMovieService = async (req, res, next) => {
    try {
        await MovieModel_1.default.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.redirect("/movies");
        // res.status(200).json({
        //     message: "success",
        //     data: updateMovie,
        // });
    }
    catch (error) {
        // next(createError(500, "Something Wrong!"));
        res.render("not_found", {
            error: error,
        });
    }
};
exports.updateMovieService = updateMovieService;
//delete movie
const deleteMovieService = async (req, res, next) => {
    try {
        await MovieModel_1.default.findByIdAndDelete(req.params.id);
        res.redirect("/movies");
        // res.status(200).json({
        //     message: "success",
        //     data: `${deleteMovie.name} Removed`,
        // });
    }
    catch (error) {
        // next(createError(500, "Something Wrong!"));
        res.render("not_found", {
            error: error,
        });
    }
};
exports.deleteMovieService = deleteMovieService;
//find movie
const findMovieService = async (req, res, next) => {
    try {
        const movie = await MovieModel_1.default.findById(req.params.id);
        res.render("movies", {
            movie: movie,
        });
        // res.status(200).json({
        //     message: "success",
        //     data: movie,
        // });
    }
    catch (error) {
        // next(createError(500, "Something Wrong!"));
        res.render("not_found", {
            error: error,
        });
    }
};
exports.findMovieService = findMovieService;
//# sourceMappingURL=MovieService.js.map