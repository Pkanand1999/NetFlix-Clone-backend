const mongoose = require('mongoose');

const shows = new mongoose.Schema({
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

const Tvshow = mongoose.model('Tvshow', shows);
module.exports = Tvshow;