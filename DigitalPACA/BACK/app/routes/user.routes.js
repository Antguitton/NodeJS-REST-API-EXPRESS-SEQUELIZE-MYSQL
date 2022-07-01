const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");
var router = require("express").Router();
module.exports = function (app) {
    router.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    // Test user private content with JWT auth
    router.get(
        "/user",
        authJwt.verifyToken,
        controller.userBoard
    );
    app.use('/api/test', router);
};
