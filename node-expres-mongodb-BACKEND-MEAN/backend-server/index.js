//config server//first I need run NODEJS
const express = require('express');
const app = express();

//res api envie y reciba datos


//SETTINGS
app.set('port', 3000);

//MIDDELEWARES

//ROUTES


//STARTING THE SERVER
app.listen(3000, ()=>{
     console.log('Server on port 3000');
})