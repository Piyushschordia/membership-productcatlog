'use strict';
const { getCredentialById } = require('./membershipdal');
var sql = require('./membershipdb');

    var Credentials = function(credential){
        this.username = credential.username;
        this.password = credential.password;
        this.credentialid = credential.credentialid;        
    };

//LOGIN FUNCTION
Credentials.changepassword = function (req,res) {
    var Credentialid = req.params.credentialid;
    var Username = req.body.username;
    var Password = req.body.password;
    sql.query(` UPDATE credentialtable set password= "${Password}" WHERE username = ? `,Username, function (err,data,fields) {             
        if(err) throw err
        if (!err){
            res.send("PASSWORD Update successfully");
         }
         else{
             console.log(JSON.stringify(err));
         }
})
}





module.exports=Credentials;

