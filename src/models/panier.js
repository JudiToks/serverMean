const mongoose = require('mongoose')
const {Schema} = require("mongoose");

const panierSchema = new mongoose.Schema ({
    daty : {
        type : Date,
        default : Date.now()
    },
    adresseLivraison : {
        type : String,
        required : true
    },
    clientId : {
        type : Schema.Types.ObjectId,
        ref : 'users',
        required : true
    }
}, {
    collection : 'panier'
})

const Panier = mongoose.model("panier", panierSchema)

module.exports = Panier