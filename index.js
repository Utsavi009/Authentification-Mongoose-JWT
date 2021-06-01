const express = require('express')   //nom i express
const app = express();
const mongoose = require('mongoose')   // npm i mongoose
const port = 3002 || process.env.PORT
require('dotenv').config()            // npm i dotenv


const authRouter= require('./routes/authRouter')
const userRouter = require('./routes/userRouter')

app.use(express.urlencoded({extended : false}))




app.use('/users', authRouter)
app.use('/', userRouter)


mongoose.connect(process.env.MONGOO_URL, {useNewUrlParser : true, useUnifiedTopology : true})



app.listen(port, console.log(`connected on Port ${port}`))
