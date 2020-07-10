const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(connection) {
    super.init(
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Informe o Nome",
            },
            len: {
              args: [2, 100],
              msg: "O nome deve ter no entre 2 à 100 letras",
            },
          },
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Informe o E-mail",
            },
            isEmail: {
              msg: "Esse campo deve ter formato de e-mail",
            },
          },
        },
      },
      {
        sequelize: connection,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Address, { foreignKey: "user_id", as: "addresses" });
    this.belongsToMany(models.Tech, {
      foreignKey: "user_id",
      through: "user_techs",
      as: "techs",
    });
  }
}

module.exports = User;
