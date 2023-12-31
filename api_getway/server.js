const express = require('express');
 const {createProxyMiddleware} = require('http-proxy-middleware');

 const app = express();
 app.use(express.static("dist"));

 const port = process.env.GETWAY_PORT || 8080;
 
 const routes={
    "/api/netflix/v2/user": "http://localhost:4001",
    "/api/netflix/v2/plan": "http://localhost:4001",
    "/api/netflix/v2/hollywood": "http://localhost:4002",
    "/api/netflix/v2/bollywood": "http://localhost:4002",
    "/api/netflix/v2/cartoon": "http://localhost:4002",
    "/api/netflix/v2/indianWebseries": "http://localhost:4003",
    "/api/netflix/v2/tvshow": "http://localhost:4003",
    "/api/netflix/v2/englishSeries": "http://localhost:4003",
    "/api/netflix/v2/mywishlist": "http://localhost:4004",
    "/api/netflix/v2/getlist": "http://localhost:4004",
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