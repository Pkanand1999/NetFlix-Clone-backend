const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const Database = require('./db');
const wishlists = require('./model/wishlistSchema');

dotenv.config();

const app = express();

const port=(process.env.WISH_PORT); 


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(morgan("dev"));
app.use(express.static("dist"));


app.post('/api/netflix/v2/mywishlist',async (req, res) => {
 try{
    let param=req.body
    let list=await wishlists.find({videoId:param.videoId,userId:param.userId});
   if(list.length!=0){
    await wishlists.findOneAndDelete({videoId:param.videoId,userId:param.userId})
    let data= await wishlists.find({userId:param.userId});
    res.status(200).send(data);
   }
   if(list.length==0){
    let data=await wishlists.create({...param})
    res.status(201).send(data);
   }

 }catch(error){
 res.status(500).send(error)
 }
})

app.post('/api/netflix/v2/getlist',async (req, res) => {
 try{
    let id=req.body.userId
    console.log(id)
    let list=await wishlists.find({userId:id});
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