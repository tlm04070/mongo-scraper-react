const router = require("express").Router();
const articleController = require("../../controllers/scrapeController");

router.route("/").get(articleController.findAll);

module.exports = router;
