const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

//TODO for some reason, the database name is not being picked up from the .env file. however, hard coding in 'pokemon_db' works to allow for seeding of the db.


// if (process.env.JAWSDB_URL) {
//   sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
  sequelize = new Sequelize(
    'pokemon_db',
    // process.env.DB_NAME,
    process.env.DB_USER,
    'password1',
    // process.env.DIALECT,
    {
      username:'root', 
      host: 'localhost',
      dialect: 'mysql',
      // port: 3306
    }
  );
// }

module.exports = sequelize;
