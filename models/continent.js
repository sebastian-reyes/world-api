'use strict';

let urlBase = "http://localhost:3000/"

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class continent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      continent.hasMany(models.countrie,{
        foreignKey: 'continent_id',
      })
    }
  }
  continent.init({
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.STRING,
    url:{
      type: DataTypes.VIRTUAL,
      get(){
        return `${urlBase}api/continents/${this.id}`;
      }
    }
  }, {
    sequelize,
    modelName: 'continent',
    timestamps: false,
  });
  return continent;
};