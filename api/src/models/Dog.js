const { DataTypes } = require("sequelize");

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "dog",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      imagen: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      altura: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      peso: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      AñosDeVida: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
