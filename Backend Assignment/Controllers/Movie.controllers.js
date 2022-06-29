const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const Movie = require('../Models/Movie.model')
const { handler } = require('./signin.controller')
router.get('', async(req,res)=> {
    try{
        const movie = await Movie.find().lean().exec()
        res.send(movie)
    }
    catch(e){
        res.send(e.message)
    }
})
router.post("", async(req,res)=> {
    try{
        const movie = await Movie.create(req.body)
       return res.send(movie)
    }
    catch(e){
       return res.send(e.message)
    }
})
router.delete("/delete/:_id",handler, async(req,res)=> {
    try{
        const movie = await Movie.findByIdAndDelete(req.params._id)
        res.send(movie)
    }
    catch(e){
        res.send(e.message)
    }
})
router.patch("/update/:_id",handler,async(req,res)=> {
    
    try{
        const movie = await Movie.findByIdAndUpdate(req.params._id,req.body)
        res.send(movie)
    }
    catch(e){
        res.send(e.message)
    }
})

module.exports = router