const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    MovieName : {type: String, required: true},
    Rating : {type: Number, required: true},
    Cast : [{type: String}],
    Genre : {type: String, required: true},
    Release_Date : {type: Date} 
},{
    versionKey: false,
    timestamps: true
})

const Movie = new mongoose.model("Movie_Schema", movieSchema)

module.exports = Movie