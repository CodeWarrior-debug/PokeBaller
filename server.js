const express = require('express');
const session = require('express-session');
require('dotenv').config();
// const routes = require("./routes");

const sequelize = require('./config/connection');
const SequelizeStore=require('connect-session-sequelize')(session.Store);
const routes=require('./routes'); //TODO: setup

const path = require('path')
const PORT = process.env.PORT || 3001; 
const app = express();

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };

  //tying configurations together
  app.use(session(sess));

  //Middleware
  app.use(express.urlencoded({extended:true}));
  app.use(express.json());

  //Routing
  // app.use(routes);

  //send every request to React, API routing must be defined before this
  app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname, "./client/build/index.html"))
  }
  )

  sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening on http://localhost:' + PORT));
  });
