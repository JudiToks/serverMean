const mongoose = require('mongoose')

const produitSchema = new mongoose.Schema({
    designation : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : false
    },
    prixvente : {
        type : Number,
        required : true
    },
    typeproduit : {
        type : String,
        requireManualDestroy : true
    }
}, {
    collection : "produits"
})

const Produits = mongoose.model("produits", produitSchema)

module.exports = Produits