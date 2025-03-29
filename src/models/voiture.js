const mongoose = require('mongoose')
const {models} = require("mongoose");

const voitureSchema = new mongoose.Schema({
    marque : String,
    modele : String,
    immatriculation : String,
    annee : Number,
    client : String
}, {
    collection : "voitures"
})

const Voitures = mongoose.model("voitures", voitureSchema)

module.exports = Voitures