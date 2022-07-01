const genre = require("../controllers/genres.controller");
var router = require("express").Router();
module.exports = function (app) {
  // Create a new genre
  router.post("/", genre.create);
  // Retrieve all genre
  router.get("/", genre.findAll);
  // Retrieve a single genre with id
  router.get("/:id", genre.findOne);
  // Update a genre with id
  router.put("/:id", genre.update);
  // Delete a genre with id
  router.delete("/:id", genre.delete);
  // Delete all genre
  router.delete("/", genre.deleteAll);
  app.use('/api/genre', router);
};