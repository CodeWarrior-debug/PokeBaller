const pokemon = require('pokemontcgsdk')
require('dotenv').config();
pokemon.configure({apiKey: process.env.KEY});
// const withAuth = require('../utils/auth')
const router = require('express').Router();
// const shuffle = require('lodash.shuffle');

const {
    User, 
    Pokemon
} = require('../models')


router.get('/homepage', async(req,res)=>{

    try {
        const list = Math.ceil(Math.random()*10);
        pokemon.card.where({pageSize:5, list})
        .then((cards)=>{
            const randomNums = shuffle(cards.data)
            const suggestedDataMap= randomNums.map(card => {
                return {
                    rname:card.name,
                    rimages: card.images.large,
                    rrarity:card.rarity,
                    rid:card.id,
                }
            })
        })
        
    }


})