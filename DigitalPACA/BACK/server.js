const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
var corsOptions = {
    origin: "http://localhost:8081"
};
const dbConfig = require("./app/config/db.config");
const db = require("./app/models");

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync()
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Antoine NODE JS REST API :)" });
});

require("./app/routes/genres.routes")(app);
require("./app/routes/series.routes")(app);
require("./app/routes/seasons.routes")(app);
require("./app/routes/episodes.routes")(app);
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}.`);
});