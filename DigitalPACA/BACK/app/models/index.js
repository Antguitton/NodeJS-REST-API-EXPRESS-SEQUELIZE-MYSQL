const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: dbConfig.port,
  operatorsAliases: 0,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.genres = require("./genres.model.js")(sequelize, Sequelize);
db.series = require("./series.model.js")(sequelize, Sequelize);
db.seasons = require("./seasons.model.js")(sequelize, Sequelize);
db.episodes = require("./episodes.model.js")(sequelize, Sequelize);
db.user = require("./user.model.js")(sequelize, Sequelize);
db.refreshToken = require("../models/refreshToken.model.js")(sequelize, Sequelize);

db.genres.belongsToMany(db.series, {
  through: "genres_series",
  as: "genres",
  foreignKey: "genres_id",
});
db.series.belongsToMany(db.genres, {
  through: "genres_series",
  as: "series",
  foreignKey: "series_id",
});
db.series.hasMany(db.seasons);
db.seasons.belongsTo(db.series);
db.seasons.hasMany(db.episodes);
db.episodes.belongsTo(db.seasons);
db.refreshToken.belongsTo(db.user, {
  foreignKey: 'userId', targetKey: 'id'
});
db.user.hasOne(db.refreshToken, {
  foreignKey: 'userId', targetKey: 'id'
});
module.exports = db;