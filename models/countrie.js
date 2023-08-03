'use strict';

let urlBase = "http://localhost:3000/"

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class countrie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      countrie.belongsTo(models.continent, {
        foreignKey: 'continent_id',
        targetKey: 'id'
      })
    }
  }
  countrie.init({
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    continent_id: DataTypes.INTEGER,
    name: DataTypes.STRING, 
    url:{
      type: DataTypes.VIRTUAL,
      get(){
        return `${urlBase}api/countries/${this.id}`;
      }
    }
  }, {
    sequelize,
    modelName: 'countrie',
    timestamps: false
  });
  return countrie;
};