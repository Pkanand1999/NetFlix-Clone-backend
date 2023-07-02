const express = require('express');
 const {createProxyMiddleware} = require('http-proxy-middleware');

 const app = express();

 const port = process.env.GETWAY_PORT || 8080;
 
 const routes={
    "/netflix/user": "http://localhost:4001",
    "/netflix/v2/hollywood": "http://localhost:4002",
    "/netflix/v2/bollywood": "http://localhost:4002",
    "/netflix/v2/cartoon": "http://localhost:4002",
 }

 for (route in routes) {
    const target=routes[route];
    app.use(route, createProxyMiddleware({ target }));
 }

 app.listen(port,()=>{
    console.log('listening on port'+ port)
 });