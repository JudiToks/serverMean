const mongoose = require('mongoose')

const rdvSchema = new mongoose.Schema({
    description : String,
    date : Date,
    heure : String,
    lieu : String,
    remarque : String,
    client : String,
    etat : String,
    personnel : String
    // voiture : String,
    // services : [String]
}, {
    collection : "rdv"
})

const RDV = mongoose.model("rdv", rdvSchema)

module.exports = RDV