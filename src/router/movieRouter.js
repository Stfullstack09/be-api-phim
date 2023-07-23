const express = require("express");
const MovieController = require("../controller/MovieController");
const router = express.Router();

const RouterMovie = (app) => {
    router.get("/get-all-movies", MovieController.getAllMovies);
    router.get("/get-movie-limit", MovieController.getMovieLimit);
    router.get("/get-detail-movie", MovieController.getDetailMovie);

    app.use("/api/v1", router);
};

module.exports = RouterMovie;
