module.exports = (sequelize, Sequelize) => {
  const Series = sequelize.define("series", {
    name: {
      type: Sequelize.STRING
    },
    in_production: {
      type: Sequelize.BOOLEAN
    },
    origin_country: {
      type: Sequelize.STRING
    },
    original_language: {
      type: Sequelize.STRING
    },
    overview: {
      type: Sequelize.STRING
    },
    popularity: {
      type: Sequelize.FLOAT
    },
    poster_path: {
      type: Sequelize.STRING
    },
    production_company: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.STRING
    }
  });
  return Series;
};