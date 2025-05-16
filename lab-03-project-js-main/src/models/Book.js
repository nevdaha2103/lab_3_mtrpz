const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Book", {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    year: DataTypes.INTEGER,
  });
};