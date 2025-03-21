const express = require('express')
const db = require('./src/config/db')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000;

app.use(express.json())
db()

app.get('/mean', function (req, res) {
    res.send('Hello la famille!!')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});