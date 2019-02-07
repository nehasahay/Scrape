const axios = require("axios"),
    cheerio = require("cheerio"),
    db = require("../models");

module.exports = app => {
    app.get("/api/scrape", (req, res) => {
        const results = [];
        axios.get("https://arstechnica.com/").then(response => {
            const $ = cheerio.load(response.data);

            $("li.tease.article").each((i, element) => {
                const thumbnail = $(element).find("figure div.listing").attr("style").match(/'([^']+)'/)[1];
                const article = {
                    headline: $(element).find("h2").text(),
                    summary: $(element).find("p.excerpt").text(),
                    url: $(element).children("a.overlay").attr("href"),
                    photo: thumbnail.slice(0, thumbnail.lastIndexOf("-")) + thumbnail.slice(thumbnail.lastIndexOf(".")),
                    byline: {
                        author: $(element).find("span[itemprop=name]").text(),
                        date: $(element).find("time").text()
                    }
                };
                db.Article.create(article);
                results.push(article);
            });
            res.json(results);
        });
    });
};