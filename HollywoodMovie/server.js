const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const Database = require('./db');
const movies = require('./model/movieSchema');

dotenv.config();

const app = express();

const port=(process.env.HOLLYWOOD_PORT); 


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(morgan("dev"));


app.get('/netflix/v2/hollywood',async (req, res) => {
 try{
    let list=await movies.find({kind:'Hollywood'});
    console.log(list);
    res.status(200).send(list);

 }catch(error){
 res.status(500).send(error)
 }
})

app.get('/netflix/v2/bollywood',async (req, res) => {
 try{
    let list=await movies.find({kind:'Bollywood'});
    console.log(list);
    res.status(200).send(list);

 }catch(error){
 res.status(500).send(error)
 }
})

app.get('/netflix/v2/cartoon',async (req, res) => {
 try{
    let list=await movies.find({kind:'Cartoon'});
    console.log(list);
    res.status(200).send(list);

 }catch(error){
 res.status(500).send(error)
 }
})

Database();
app.listen(port,()=>{
    console.log(port);
});