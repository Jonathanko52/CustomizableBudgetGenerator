const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/assets', express.static(__dirname + './../assets'))

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname + './../views/index.html'));
});

app.listen(3333, ()=>{
    console.log('Listening on 3333'); 
});