const express = require('express');
 const {createProxyMiddleware} = require('http-proxy-middleware');

 const app = express();

 const port = process.env.GETWAY_PORT;

 const routes={
    "/netflix/user": "http://localhost:4001",
    "/public/v2/users/update": "http://localhost:4002",
    "/download": "http://localhost:4003",
 }

 for (route in routes) {
    const target=routes[route];
    app.use(route, createProxyMiddleware({ target }));
 }

 app.listen(port,()=>{
    console.log('listening on port'+ port)
 });