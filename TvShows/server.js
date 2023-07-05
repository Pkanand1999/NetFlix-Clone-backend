const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const Database = require('./db');
const movies = require('./model/showSchema');

dotenv.config();

const app = express();

const port=(process.env.SHOW_PORT); 


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(morgan("dev"));
app.use(express.static("dist"));


app.get('/api/netflix/v2/indianWebseries',async (req, res) => {
 try{
    let list=await movies.find({kind:'IndianWebseries'});
    console.log(list);
    res.status(200).send(list);

 }catch(error){
 res.status(500).send(error)
 }
})

app.get('/api/netflix/v2/tvshow',async (req, res) => {
 try{
    let list=await movies.find({kind:'Tvshow'});
    console.log(list);
    res.status(200).send(list);

 }catch(error){
 res.status(500).send(error)
 }
})

app.get('/api/netflix/v2/englishSeries',async (req, res) => {
 try{
    let list=await movies.find({kind:'EnglishSeries'});
    console.log(list);
    res.status(200).send(list);

 }catch(error){
 res.status(500).send(error)
 }
})
app.get('*/',(req, res) =>{
   res.sendFile(__dirname + '/dist/index.html')
})

Database();
app.listen(port,()=>{
    console.log(port);
});