require("dotenv").config();
const express = require("express"),
    exphbs = require("express-handlebars"),
    mongoose = require("mongoose"),
    app = express(),
    PORT = process.env.PORT || 3000,
    MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static("public"));
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true
});

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});