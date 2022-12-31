import { Request, Response, NextFunction } from "express";
import {
    createMovieService,
    deleteMovieService,
    getMovieService,
    updateMovieService,
    findMovieService,
    editMovieService,
} from "../services/MovieService";

//get all
export const getMovies = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    getMovieService(req, res, next);
};

//create
export const createMovie = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    createMovieService(req, res, next);
};

//edit form load
//update
export const editMovie = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    editMovieService(req, res, next);
};

//update
export const updateMovie = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    updateMovieService(req, res, next);
};

//delete
export const deleteMovie = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    deleteMovieService(req, res, next);
};

//find movie
export const findMovie = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    findMovieService(req, res, next);
};
