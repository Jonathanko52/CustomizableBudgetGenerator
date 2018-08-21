const pass = "xfmH-K3m2a79Oeh21kgUixggztErS5XE";
const user = "ulurpczi";
const pg = require('pg');
const dbUrl = 'postgres://ulurpczi:xfmH-K3m2a79Oeh21kgUixggztErS5XE@nutty-custard-apple.db.elephantsql.com:5432/ulurpczi'




module.exports={
    // checkCredentials: ( req, res, next ) => {
    //     if(req.body.user === 'codesmith' && req.body.pass === 'ilovetesting'){
    //         res.cookie('token', 'admin');
    //         res.redirect('/secret');
    //     } else {
    //         res.send('unsuccessful login attempt');
    //     }
    // },

    checkUser: ( req, res, next )=> {        
        console.log('req', req.body)

        var client = new pg.Client(dbUrl);
        client.connect((err)=>{
                if(err){
                    return console.error('postgres connection failed', err)
                }
                console.log("connection established")
            // client.query('SELECT * FROM userdata', (err,result) =>{
            //     if(err){
            //         return console.error('error running query', err);
            //     } else {
            //         console.log('second query', result.rows[0])
            //     }
            // })
            client.query(`SELECT ID FROM userdata WHERE username = '${req.body.user}' AND password = '${req.body.password}';`,(err,result)=>{
                if(err){
                    return console.error('error running query', err);
                } else {
                    if(result.rows[0] === undefined){
                        console.error("LOGIN FAILED")
                    } else {
                        console.log(result.rows[0])
                    }
                }
            });
        })
        next()
    }



}