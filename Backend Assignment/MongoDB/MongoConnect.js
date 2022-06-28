const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const connect = ()=> {
    mongoose.connect(
        process.env.MONGO_URL
    )
    console.log('mongo connected')
}


module.exports= connect