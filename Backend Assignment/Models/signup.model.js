const mongoose = require('mongoose')

const regSchema = new mongoose.Schema({
    username : {type: String, required: true},
    password : {type: String, required: true},
   
},{
    versionKey: false,
    timestamps: true
})

const User = new mongoose.model("user_Schema", regSchema)

module.exports = User