const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
    email : {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    telephone : {
        type : String,
        required : true
    },
    role : {
        type : Number,
        required : true,
        default: 1
    }
}, {
    collection: "users"
})

const Users = mongoose.model("users", UsersSchema)

module.exports = Users;