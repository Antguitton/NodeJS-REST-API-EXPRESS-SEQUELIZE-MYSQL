const season = require("../controllers/seasons.controller");
var router = require("express").Router();
module.exports = function (app) {
  // Create a new season
  router.post("/", season.create);
  // Retrieve all seasons
  router.get("/", season.findAll);
  // Retrieve a single season with id
  router.get("/:id", season.findOne);
  // Update a season with id
  router.put("/:id", season.update);
  // Delete a season with id
  router.delete("/:id", season.delete);
  // Delete all seasons
  router.delete("/", season.deleteAll);
  app.use('/api/season', router);
};