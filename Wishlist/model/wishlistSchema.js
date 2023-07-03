const mongoose = require('mongoose');

const wishlist = new mongoose.Schema({
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
    },
    userId:{
        type: String,
    }
});

const Wishlists = mongoose.model('Wishlists', wishlist);
module.exports = Wishlists;