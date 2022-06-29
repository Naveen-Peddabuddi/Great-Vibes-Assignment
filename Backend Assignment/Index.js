
const express = require('express')
const app = express()
const connect = require('./MongoDB/MongoConnect')
const Movie_add = require('./Controllers/Movie.controllers')
const cookieParser = require('cookie-parser')
const { signinHandler} = require('./Controllers/signin.controller')
const User = require('./Controllers/signup.controller')
app.use(express.json())
app.use(cookieParser())
app.use("/movie", Movie_add )
app.post('/signin', signinHandler)
app.use('/signup', User)
app.listen(8000, async(req,res)=> {
    try{
       await connect()
        console.log('listening at port 8000')
    }
    catch{
        console.log(e.message)
    }
})