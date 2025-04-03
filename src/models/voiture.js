const mongoose = require('mongoose')
const {models, Schema} = require("mongoose");

const voitureSchema = new mongoose.Schema({
    marque : String,
    modele : String,
    immatriculation : String,
    annee : Number,
    client : {
        type : Schema.Types.ObjectId,
        ref : 'users',
        required : true
    }
}, {
    collection : "voitures"
})

const Voitures = mongoose.model("voitures", voitureSchema)

module.exports = Voitures