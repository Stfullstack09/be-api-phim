const MovieDetail = require("../model/moviedetail");
const Movies = require("../model/movies");

class MovieController {
    async getAllMovies(req, res) {
        try {
            const data = await Movies.find({});

            res.status(200).json({
                errCode: 200,
                msg: "ok",
                data,
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                errCode: 500,
                msg: "err from server",
            });
        }
    }

    async getMovieLimit(req, res) {
        try {
            const option = {
                page: req.query.page || 1,
                limit: req.query.limit || 10,
            };

            const { docs, ...meta } = await Movies.paginate({}, option);

            res.status(200).json({
                errCode: 200,
                msg: "ok",
                data: docs,
                meta,
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                errCode: 500,
                msg: "err from server",
            });
        }
    }

    async getDetailMovie(req, res) {
        try {
            const data = await MovieDetail.findOne({
                "movie.slug": req.query.slug,
            });

            res.status(200).json({
                errCode: 200,
                msg: "ok",
                data,
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                errCode: 500,
                msg: "err from server",
            });
        }
    }
}

module.exports = new MovieController();
