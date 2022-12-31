"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findMovie = exports.deleteMovie = exports.updateMovie = exports.editMovie = exports.createMovie = exports.getMovies = void 0;
const MovieService_1 = require("../services/MovieService");
//get all
const getMovies = async (req, res, next) => {
    (0, MovieService_1.getMovieService)(req, res, next);
};
exports.getMovies = getMovies;
//create
const createMovie = async (req, res, next) => {
    (0, MovieService_1.createMovieService)(req, res, next);
};
exports.createMovie = createMovie;
//edit form load
//update
const editMovie = async (req, res, next) => {
    (0, MovieService_1.editMovieService)(req, res, next);
};
exports.editMovie = editMovie;
//update
const updateMovie = async (req, res, next) => {
    (0, MovieService_1.updateMovieService)(req, res, next);
};
exports.updateMovie = updateMovie;
//delete
const deleteMovie = async (req, res, next) => {
    (0, MovieService_1.deleteMovieService)(req, res, next);
};
exports.deleteMovie = deleteMovie;
//find movie
const findMovie = async (req, res, next) => {
    (0, MovieService_1.findMovieService)(req, res, next);
};
exports.findMovie = findMovie;
//# sourceMappingURL=MovieController.js.map