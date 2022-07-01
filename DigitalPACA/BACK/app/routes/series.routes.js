const { authJwt } = require("../middleware");
const serie = require("../controllers/series.controller");
var router = require("express").Router();
module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    // Create a new serie
    router.post("/", serie.create);
    // Retrieve all series
    router.get(
        "/",
        authJwt.verifyToken,
        serie.findAll
    );
    // Retrieve a single serie with id
    router.get("/:id", serie.findOne);
    // Update a serie with id
    router.put("/:id", serie.update);
    // Delete a serie with id
    router.delete("/:id", serie.delete);
    // Delete all series
    router.delete("/", serie.deleteAll);
    app.use('/api/serie', router);
};