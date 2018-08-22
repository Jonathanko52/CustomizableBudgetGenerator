const pass = "xfmH-K3m2a79Oeh21kgUixggztErS5XE";
const user = "ulurpczi";
const pg = require('pg');
const dbUrl = 'postgres://ulurpczi:xfmH-K3m2a79Oeh21kgUixggztErS5XE@nutty-custard-apple.db.elephantsql.com:5432/ulurpczi'




module.exports={

    checkUser: async(req,res,next)=>{
        const data = function promiseReturningThingy(){
            return new Promise((resolve,reject)=>{
                var client = new pg.Client(dbUrl);
                client.connect((err)=>{
                        if(err){
                            return console.error('postgres connection failed', err)
                        }
                    client.query(`SELECT ID FROM userdata WHERE username = '${req.body.user}' AND password = '${req.body.password}';`,(err,result)=>{
                        if(err){
                            return console.error('error running query', err);
                        } else {
                            if(result.rows[0] === undefined){
                                console.error("login failed")
                                //Assuming promise failure, rejects with following error message
                                reject(err)
                            } else {
                                console.log("query success", result.rows[0])
                                //Assuming promise success, resolves promise as result of query, under "data" const
                                resolve(result.rows[0])
                                req.body = data;
                                next()
                            }
                        }
                    });
                })
            })//end Promise
        }()
    }


}