const express = require('express')
const cors = require('cors')
const { readdirSync } = require('fs')
const {db} = require('./db/db')
const cookieparser = require('cookie-parser');

require('dotenv').config()


const PORT = process.env.PORT
const app = express()

//middlewares
app.use(express.json())
app.use(cookieparser())
app.use(cors({
    origin:['http://localhost:3000'],
    methods:['POST','GET','DELETE'],
    credentials:true
}))


// routes
readdirSync('./routes').map((route)=>app.use('/api/v1',require('./routes/'+route)))

const server = () =>{
    db()
    app.listen(PORT,()=>{
        console.log('Port:',PORT)
    })
}

server()