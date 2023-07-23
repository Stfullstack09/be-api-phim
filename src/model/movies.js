const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongoosePaginate = require('mongoose-paginate-v2');

const Schema = mongoose.Schema;

// skim = schema
const Movies = new Schema(
    {
        modified: {type:'object'},
        name: { type: 'string' },
        origin_name: { type: 'string'},
        thumb_url: { type: 'string' },
        poster_url: { type: 'string', required: true },
        year: { type: 'number' },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

// add plugin
mongoose.plugin(slug);
mongoose.plugin(mongoosePaginate);

module.exports = mongoose.model('Movies', Movies);
