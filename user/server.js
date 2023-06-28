const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const Database = require('./db');


dotenv.config();

const app = express();

const port=(process.env.USER_PORT); 


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(morgan("dev"));

Database();
app.listen(port,()=>{
    console.log(port);
});