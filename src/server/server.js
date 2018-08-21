const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const authController = require('./controllers/authController')

//ElephantSQL stuff
const pass = "xfmH-K3m2a79Oeh21kgUixggztErS5XE";
const user = "ulurpczi";
const pg = require('pg');
const dbUrl = 'postgres://ulurpczi:xfmH-K3m2a79Oeh21kgUixggztErS5XE@nutty-custard-apple.db.elephantsql.com:5432/ulurpczi'

//

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/assets', express.static(__dirname + './../../assets'))

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname + './../../views/login.html'));
});

app.post('/signin',authController.checkUser,(req,res)=>{
        res.sendFile(path.join(__dirname + './../../views/login.html'));
    }
)

app.listen(3333, ()=>{
    console.log('Listening on 3333');
});