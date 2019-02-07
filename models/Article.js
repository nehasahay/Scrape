mongoose = require("mongoose");

const Schema = mongoose.Schema;

module.exports = mongoose.model("Article", new Schema({
    headline: {
        type: String,
        required: true
    },
    summary: String,
    url: {
        type: String,
        required: true
    },
    photo: String,
    byline: {
        author: String,
        date: String
    },
    comment: {
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }
}));