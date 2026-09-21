const mongoose = require("mongoose")


const connectToDB = async() => {
   try {
     await mongoose.connect(process.env.MONGO_URI)
     console.log("successfully connected to DB")
   } catch (error) {
    console.log('Error in connecting to DB',error)
   }
}

module.exports =connectToDB