module.exports = (sequelize, Sequelize) => {
  const Genres = sequelize.define("genres", {
    name: {
      type: Sequelize.STRING
    }
  });
  return Genres;
};