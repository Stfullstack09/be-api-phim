const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");

const Schema = mongoose.Schema;

const MovieDetailSchema = new Schema({
    movie: {
        created: {
            time: {
                type: Date,
                required: true,
            },
        },
        modified: {
            time: {
                type: Date,
                required: true,
            },
        },
        _id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            slug: "name",
            unique: true,
            required: true,
        },
        origin_name: {
            type: String,
        },
        content: {
            type: String,
        },
        type: {
            type: String,
        },
        status: {
            type: String,
        },
        thumb_url: {
            type: String,
        },
        poster_url: {
            type: String,
        },
        is_copyright: {
            type: Boolean,
        },
        sub_docquyen: {
            type: Boolean,
        },
        chieurap: {
            type: Boolean,
        },
        trailer_url: {
            type: String,
        },
        time: {
            type: String,
        },
        episode_current: {
            type: String,
        },
        episode_total: {
            type: String,
        },
        quality: {
            type: String,
        },
        lang: {
            type: String,
        },
        notify: {
            type: String,
        },
        showtimes: {
            type: String,
        },
        year: {
            type: Number,
        },
        view: {
            type: Number,
        },
        actor: {
            type: [String],
        },
        director: {
            type: [String],
        },
        category: [
            {
                id: {
                    type: String,
                },
                name: {
                    type: String,
                },
                slug: {
                    type: String,
                },
            },
        ],
        country: [
            {
                id: {
                    type: String,
                },
                name: {
                    type: String,
                },
                slug: {
                    type: String,
                },
            },
        ],
    },
    episodes: [
        {
            server_name: {
                type: String,
            },
            server_data: [
                {
                    name: {
                        type: String,
                    },
                    slug: {
                        type: String,
                    },
                    filename: {
                        type: String,
                    },
                    link_embed: {
                        type: String,
                    },
                    link_m3u8: {
                        type: String,
                    },
                },
            ],
        },
    ],
});

MovieDetailSchema.plugin(slug);
const MovieDetail = mongoose.model("MovieDetail", MovieDetailSchema);

module.exports = MovieDetail;
