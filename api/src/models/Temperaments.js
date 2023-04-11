const { DataTypes } = require("sequelize");

module.exports = (Sequelize) => {
  Sequelize.define("Temperament", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
