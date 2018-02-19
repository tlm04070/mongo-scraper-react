const router = require("express").Router();
const articleRoutes = require("./article");
const scrapeRoutes = require("./scrape");

// article routes
router.use("/articles", articleRoutes);
router.use("/scrape", scrapeRoutes);

module.exports = router;
