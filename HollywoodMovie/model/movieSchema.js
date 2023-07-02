const mongoose = require('mongoose');

const hollywood = new mongoose.Schema({
    kind: {
        type: String,
    },
    videoId: {
        type: String,
    },
    publishedAt: {
        type: String,
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    url: {
        type: String,
    }
});

const Movie = mongoose.model('Movie', hollywood);
module.exports = Movie;