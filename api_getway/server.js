const express = require('express');
 const {createProxyMiddleware} = require('http-proxy-middleware');

 const app = express();
 app.use(express.static("dist"));

 const port = process.env.GETWAY_PORT || 8080;
 
 const routes={
    "/api/netflix/v2/user": "https://four001.onrender.com",
    "/api/netflix/v2/plan": "https://four001.onrender.com",
    "/api/netflix/v2/hollywood": "https://four002.onrender.com",
    "/api/netflix/v2/bollywood": "https://four002.onrender.com",
    "/api/netflix/v2/cartoon": "https://four002.onrender.com",
    "/api/netflix/v2/indianWebseries": "https://four003.onrender.com",
    "/api/netflix/v2/tvshow": "https://four003.onrender.com",
    "/api/netflix/v2/englishSeries": "https://four003.onrender.com",
    "/api/netflix/v2/mywishlist": "https://four004.onrender.com",
    "/api/netflix/v2/getlist": "https://four004.onrender.com",
 }

 for (route in routes) {
    const target=routes[route];
    app.use(route, createProxyMiddleware({ target }));
 }
 app.get('*/',(req, res) =>{
   res.sendFile(__dirname + '/dist/index.html')
})

 app.listen(port,()=>{
    console.log('listening on port'+ port)
 });