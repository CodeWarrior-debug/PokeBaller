import pokemon from 'pokemontcgsdk'
require('dotenv').config();
pokemon.configure({apiKey: process.env.KEY});
// const withAuth = require('../utils/auth')
const router = require('express').Router();
// const shuffle = require('lodash.shuffle');

const {
    User, 
    Pokemon
} = require('../models')


router.get('/home', async(req,res)=>{

    pokemon.card.find('base1-4')
        .then(
            card=>{
                console.log(card.name);
            }
        )


})