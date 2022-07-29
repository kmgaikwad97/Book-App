const mongoose = require('mongoose')

const DB = process.env.DATABASE;
mongoose.connect(`mongodb://localhost:27017/booksData`)
.then(()=>{
    console.log("Connection Successful");
})
.catch((err)=>{
    console.log("No Connection");
})