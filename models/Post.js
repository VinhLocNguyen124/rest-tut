const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    emailuser: {
        type: String,
        required: true
    },
    idpostshare: {
        type: String,
        required: false
    },
    content: {
        type: String,
        required: true
    },
    imgurl: {
        type: String,
        required: false
    },
    seescope: {
        type: String,
        required: true
    },
    allowcmt: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Posts', PostSchema);