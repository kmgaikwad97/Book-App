const express = require('express');
const router = new express.Router();
const UserBooks = require('../models/books')
const EngUserBooks = require('../models/englishbooks')


// Create = POST 
router.post("/postbooks",async(req,res)=>{
    try{
        const addingBooks = new UserBooks(req.body)
        console.log(req.body);
        const insertBooks = await addingBooks.save()
        res.status(201).send(insertBooks);
    }
    catch(err){
        res.status(400).send(err)
    }
})


// Read = Get

router.get("/getbooks",async(req,res)=>{
    try{
        const getBooks = await UserBooks.find({})
        res.send(getBooks);
    }
    catch(err){
        res.status(400).send(err)
    }
})


// Get by ID 

router.get("/getbooks/:id",async(req,res)=>{
    try{
        console.log(req.params.id);
        const _id = req.params.id 
        const getThatbook = await UserBooks.findById(_id);
        res.send(getThatbook);
    }
    catch(err){
        res.status(400).send(err)
    }
})


// Update = Patch

router.patch("/getbooks/:id",async(req,res)=>{
    try{
        const _id = req.params.id
        console.log(req.params.id);
        const updateData = await UserBooks.findByIdAndUpdate(_id,req.body, {new:true});
        res.send(updateData);
    }
    catch(err){
        res.status(500).send(err)
    }
})


// Remove = Deleteuser



// **************** English Books ***************** //


// Create = POST 
router.post("/english",async(req,res)=>{
    try{
        const addingBooks = new EngUserBooks(req.body)
        console.log(req.body);
        const insertBooks = await addingBooks.save()
        res.status(201).send(insertBooks);
    }
    catch(err){
        res.status(400).send(err)
    }
})


// Read = Get

router.get("/english",async(req,res)=>{
    try{
        const getBooks = await EngUserBooks.find({})
        res.send(getBooks);
    }
    catch(err){
        res.status(400).send(err)
    }
})



// Get by ID 

router.get("/english/:id",async(req,res)=>{
    try{
        console.log(req.params.id);
        const _id = req.params.id 
        const getThatbook = await EngUserBooks.findById(_id);
        res.send(getThatbook);
    }
    catch(err){
        res.status(400).send(err)
    }
})


// Update = Patch

router.patch("/english/:id",async(req,res)=>{
    try{
        const _id = req.params.id
        console.log(req.params.id);
        const updateData = await EngUserBooks.findByIdAndUpdate(_id,req.body, {new:true});
        res.send(updateData);
    }
    catch(err){
        res.status(500).send(err)
    }
})


// Remove = Delete

router.delete("/english/:id",async(req,res)=>{
    try{
        const deleteBook = await EngUserBooks.findByIdAndDelete(req.params.id);
        res.send(deleteBook);
    }
    catch(err){
        res.status(500).send(err)
    }
})

// ********************************* //

module.exports = router;
