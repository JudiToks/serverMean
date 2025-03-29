const mongoose = require('mongoose')

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
        required : true
    },
    produit : {
        type : String,
        required : true
    },
    etat : {
        type : String,
        required : true
    }
}, {
    collection : "reparation"
})

const Reparation = mongoose.model("reparation", reparationSchema)

module.exports = Reparation