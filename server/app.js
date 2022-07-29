const dotenv = require('dotenv')
const express = require('express')
const app = express()
require('./db/conn')
const UserBooks = require('./models/books')
const EngUserBooks = require('./models/englishbooks')
const router = require('./routers/routes')
const cors = require('cors')
const morgan = require('morgan')
// const bodyParser = require('body-parser')

// app.get('/',(req,res)=>{
//     res.send('hello')
// })

dotenv.config({path:'./config.env'});

const PORT = process.env.PORT 

app.use(cors())
app.use(morgan('tiny'))

app.use(express.json());

app.use(router);


app.listen(PORT,()=>{
    console.log(`Connection is live at Port ${PORT}`);
})
