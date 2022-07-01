const episode = require("../controllers/episodes.controller");
var router = require("express").Router();
module.exports = function (app) {
  // Create a new episode
  router.post("/", episode.create);
  // Retrieve all episode
  router.get("/", episode.findAll);
  // Retrieve a single episode with id
  router.get("/:id", episode.findOne);
  // Update a episode with id
  router.put("/:id", episode.update);
  // Delete a episode with id
  router.delete("/:id", episode.delete);
  // Delete all episode
  router.delete("/", episode.deleteAll);
  app.use('/api/episode', router);
};