const pokemon = require('pokemontcgsdk')
require('dotenv').config();
pokemon.configure({apiKey: process.env.KEY});
// const withAuth = require('../utils/auth')
const router = require('express').Router();
// const shuffle = require('lodash.shuffle');

// const {
//     User, 
//     Pokemon
// } = require('../models')