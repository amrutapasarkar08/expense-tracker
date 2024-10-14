 const mongoose = require('mongoose')
 require('dotenv').config()

 const MONGO_URL = process.env.MONGO_URL

 const db = async () => {
    try {
        mongoose.set('strictQuery',false)
       const result= await mongoose.connect(process.env.MONGO_URL)
        console.log('DB connected')

    } catch (error) {
        console.log('DB connection error')
    }
 }

 module.exports = {db}