const mongoose = require('mongoose');

async function Database(){
    mongoose.connect(process.env.MONGODB_DATABASE)
    .then((res)=>{
        console.log("Database connected")
    })
    .catch((err)=>{
        console.log("Error connecting to MongoDB");
    });
}

module.exports = Database;