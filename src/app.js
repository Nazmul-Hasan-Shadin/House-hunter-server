require('dotenv').config()
const connectToDb = require("./db/connectdb");
const express= require('express');
const applyMiddleware = require('./middleware/applayMiddleware');
const app= express()

const users= require('./router/Users/users')

applyMiddleware(app)


app.use(users)


connectToDb()

app.get('/health', (req,res)=>{
     res.send('server is running')
})

app.all('*',(req,res,next)=>{
     const error= new Error(` req url ${req.url} is invaild`)
     next(error)
})

 app.use((err,req,res,next)=>{
    res.status(err.status || 500).json({
        message:err.message
    })
 })

 app.listen(3000,(req,res)=>{
  console.log('server is running');
 })







