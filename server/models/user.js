"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Post, {
        foreignKey: "userid",
      });
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: {
        type: DataTypes.STRING,
        defaultValue: "https://via.placeholder.com/100",
      },
      fullname: {
        type: DataTypes.STRING,
        defaultValue: "ini fullname",
      },
      bio: {
        type: DataTypes.STRING,
        defaultValue: "Ini Bio",
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
