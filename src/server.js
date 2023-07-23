const express = require("express");
const { connect } = require("./config/db");
const RouterMovie = require("./router/movieRouter");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const axios = require("axios");

app.get("/image-proxy", async (req, res) => {
    try {
        const imageUrl = req.query.url;
        const response = await axios.get(imageUrl, {
            responseType: "stream",
        });

        // Set the appropriate headers
        res.set("Content-Type", response.headers["content-type"]);
        res.set("Content-Length", response.headers["content-length"]);

        // Pipe the response stream to the client
        response.data.pipe(res);
    } catch (error) {
        console.error("Error occurred:", error);
        res.status(500).send("Internal Server Error");
    }
});

require("./router/movieRouter");

// connect DB
connect();

// config router
RouterMovie(app);

app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`);
});
