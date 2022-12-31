import { NextFunction, Request, Response } from "express";
import Movie from "../models/MovieModel";

//get movies
export const getMovieService = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const year = req.query.year;
        let movieData;
        if (year) {
            movieData = await Movie.find({ year });
        } else {
            movieData = await Movie.find();
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
    } catch (error: any) {
        // next(createError(500, "Something Wrong!"));
        res.render("not_found", {
            error: error,
        });
    }
};

//create movie
export const createMovieService = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        let newMovie: any = new Movie(req.body);
        await newMovie.save();
        res.redirect("/movies");
        // res.status(201).json({
        //     message: "success",
        //     data: savedMovie,
        // });
    } catch (error: any) {
        // next(createError(500, "Something Wrong!"));
        res.render("not_found", {
            error: error,
        });
    }
};

//Edit From Load
export const editMovieService = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const movie = await Movie.findById(req.params.id);
        res.render("edit_movies", {
            movie: movie,
        });
    } catch (error) {
        // next(createError(500, "Something Wrong!"));
        res.render("not_found", {
            error: error,
        });
    }
};

//update movie
export const updateMovieService = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        await Movie.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.redirect("/movies");
        // res.status(200).json({
        //     message: "success",
        //     data: updateMovie,
        // });
    } catch (error: any) {
        // next(createError(500, "Something Wrong!"));
        res.render("not_found", {
            error: error,
        });
    }
};

//delete movie
export const deleteMovieService = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        await Movie.findByIdAndDelete(req.params.id);
        res.redirect("/movies");
        // res.status(200).json({
        //     message: "success",
        //     data: `${deleteMovie.name} Removed`,
        // });
    } catch (error: any) {
        // next(createError(500, "Something Wrong!"));
        res.render("not_found", {
            error: error,
        });
    }
};

//find movie
export const findMovieService = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const movie = await Movie.findById(req.params.id);
        res.render("movies", {
            movie: movie,
        });
        // res.status(200).json({
        //     message: "success",
        //     data: movie,
        // });
    } catch (error: any) {
        // next(createError(500, "Something Wrong!"));
        res.render("not_found", {
            error: error,
        });
    }
};
