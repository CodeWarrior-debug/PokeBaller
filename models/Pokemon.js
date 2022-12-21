const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Pokemon extends Model {}

Pokemon.init({
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rarity: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  images: {
    type: DataTypes.STRING,
    allowNull: false,
  },  
},
{
    sequelize,
    freezeTableName:true,
    underscored:true,
    modelName:'pokemon',
}


);

Model.exports=Pokemon;