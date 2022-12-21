const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

sequelize = new Sequelize(
    'pokemon_db',
    process.env.DB_USER,
    'password1',
    {
username: 'root',
host:'localhost',
dialect:'mysql'
    }
)

module.exports=sequelize;