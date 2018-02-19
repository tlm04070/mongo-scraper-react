const axios = require("axios");
const db = require("../models");
const keys = require("../config/keys");

module.exports = {
  findAll: function(req, res) {
    const params = Object.assign({ api_key: keys.nytKey }, req.query);
    axios
      .get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
        params
      })
      .then(response => {
        db.Article.find()
          .then(dbArticles =>
            response.data.response.docs.filter(article =>
              dbArticles.every(
                dbArticle => dbArticle._id.toString() !== article._id
              )
            )
          )
          .then(articles => res.json(articles))
          .catch(err => res.status(422).json(err));
      });
  }
};
