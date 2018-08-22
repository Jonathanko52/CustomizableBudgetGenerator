const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const authController = require('./controllers/authController')

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/assets', express.static(__dirname + './../../assets'))

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname + './../../views/login.html'));
});

app.post('/signin',
    // async function (){
    //     try{
    //         const result = await authController.checkUser()
    //         console.log("RESULT")
    //         return result
    //     } catch(error) {
    //         console.log("ERROR", error)
    //     }
    
    // }

    authController.checkUser
    
    ,(req,res)=>{
        console.log("afterauth req.body", req.body)
        res.sendFile(path.join(__dirname + './../../views/login.html'));
    }
)

app.listen(3333, ()=>{
    console.log('Listening on 3333');
});