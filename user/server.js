const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const Database = require('./db');
const users = require('./model/userSchema')


dotenv.config();

const app = express();

const port = (process.env.USER_PORT);


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.static("dist"));

app.post('/api/netflix/v2/user', async function (req, res) {
    try {
        let user = req.body;
        let finduser = await users.find({ email: user.email });
        if (finduser.length == 0) {
            let data = await users.create({ ...user })
            res.status(201).send(data)
        }
        if (finduser.length == 1) {
            res.status(200).send(finduser)
        }

    } catch (error) {
        res.status(500).send(error);
    }
})
app.post('/api/netflix/v2/plan', async function (req, res) {
    try {
        let user = req.body;
        let finduser = await users.find({ email: user.email });
        if (finduser.length == 0) {
            res.status(404).send('')
        }
        if (finduser.length == 1) {
            res.status(200).send(finduser)
        }

    } catch (error) {
        res.status(500).send(error);
    }
})
app.get('*/',(req, res) =>{
    res.sendFile(__dirname + '/dist/index.html')
 })

Database();
app.listen(port, () => {
    console.log(port);
});