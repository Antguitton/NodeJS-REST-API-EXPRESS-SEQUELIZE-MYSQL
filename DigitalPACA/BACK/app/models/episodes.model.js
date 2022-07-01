module.exports = (sequelize, Sequelize) => {
  const Episodes = sequelize.define("episodes", {
    name: {
      type: Sequelize.STRING
    },
    episode_number: {
      type: Sequelize.INTEGER
    },
    runtime: {
      type: Sequelize.INTEGER
    }
  });
  return Episodes;
};