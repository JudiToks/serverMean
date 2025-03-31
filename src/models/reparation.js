const mongoose = require('mongoose')
const {Schema} = require("mongoose");

const reparationSchema = new mongoose.Schema({
    description : {
        type : String,
        required : true
    },
    voiture : {
        type : String,
        required : true
    },
    daty : {
        type : Date,
        required : true,
        default : Date.now()
    },
    produit : {
        type : String,
        required : true
    },
    rdvId : {
        type : Schema.Types.ObjectId,
        ref : 'rdv',
        required : true
    }
}, {
    collection : "reparation"
})

const Reparation = mongoose.model("reparation", reparationSchema)

module.exports = Reparation