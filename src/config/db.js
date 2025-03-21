const mongoose = require('mongoose')

const db_connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("CONNECTION BASE SUCCESS")
    }
    catch (err)
    {
        console.error("DATABASE CONNECTION FAILED : ", err)
    }
}

module.exports = db_connect