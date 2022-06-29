
const express = require('express')
const app = express()
const connect = require('./MongoDB/MongoConnect')
const Movie_add = require('./Controllers/Movie.controllers')
app.use(express.json())

app.use("/movie", Movie_add )

app.listen(8000, async(req,res)=> {
    try{
       await connect()
        console.log('listening at port 5000')
    }
    catch{
        console.log(e.message)
    }
})