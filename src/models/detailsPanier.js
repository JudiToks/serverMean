const mongoose = require('mongoose')
const {Schema} = require("mongoose");

const detailsPanierSchema = new mongoose.Schema({
    panierId : {
        type : Schema.Types.ObjectId,
        ref : 'panier',
        required : true
    },
    produitId : {
        type : Schema.Types.ObjectId,
        ref : 'produits',
        required : true
    },
    qte : {
        type : Number,
        required : true
    }
}, {
    collection : 'detailspanier'
})

const detailsPanier = mongoose.model('detailspanier', detailsPanierSchema)

module.exports = detailsPanier