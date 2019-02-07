mongoose = require("mongoose");

const Schema = mongoose.Schema;

module.exports = mongoose.model("Comment", new Schema({
    name: String,
    body: String
}));