//config server//first I need run NODEJS
//node backend-server/index.js
const express = require('express');
const app = express();

//res api envie y reciba datos


//SETTINGS
app.set('port', process.env.PORT || 5000);

//MIDDELEWARES

//ROUTES


//STARTING THE SERVER
app.listen(app.get('port'), ()=>{
     console.log('Server on port', app.get('port'));
});