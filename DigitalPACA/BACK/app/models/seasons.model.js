module.exports = (sequelize, Sequelize) => {
  const Seasons = sequelize.define("seasons", {
    name: {
      type: Sequelize.STRING
    },
    season_number: {
      type: Sequelize.INTEGER
    }
  });
  return Seasons;
};