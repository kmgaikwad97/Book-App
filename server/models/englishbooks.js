const express = require('express');
const mongoose = require('mongoose')

const englishbooksSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    
    price:{
        type:String,
        required:true
    },
    writer:{
        type:String,
        required:true
    },
    publishedDate:{
        type:Date,
        default:Date.now
    },
    link:{
        type:String,
        required:true
    }
})

const EngUserBooks = new mongoose.model("engbooksData", englishbooksSchema)
module.exports = EngUserBooks

