const mongoose = require('mongoose')
const {Schema} = require("mongoose");

const stockSchema = new mongoose.Schema({
    produitId : {
        type : Schema.Types.ObjectId,
        ref : "produits",
        required : true
    },
    qte : {
        type : Number,
        required : true
    }
}, {
    collection : "stock"
})

const Stock = mongoose.model("stock", stockSchema)

module.exports = Stock