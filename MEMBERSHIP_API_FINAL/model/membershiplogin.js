'use strict';
var sql = require('./membershipdb');

    var Credentials = function(credential){
        this.username = credential.username;
        this.password = credential.password;
        
    };

//LOGIN FUNCTION
Credentials.login = function (req,res) {
    var Username = req.body.username;
    var Password = req.body.password;
    sql.query('SELECT * FROM credentialtable WHERE username =? AND password =?',[Username,Password], function (err, data,fields) {             
        if(err) throw err
        if(data.length>0){
       Username = req.body.Username;
       Password =req.body.Password;
       res.send("Valid user");
   }else{
       res.send("Invalid user");
   }
})
}

module.exports=Credentials;