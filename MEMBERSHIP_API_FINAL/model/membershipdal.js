'user strict';
var sql = require('./membershipdb');          // ACCESSING DB

var Credential = function(credential){
    this.credentialid=credential.credentialid;
    this.username = credential.username;
    this.password = credential.password;
    this.user= credential.user;
};


// FUNCTION FOR SHOWING ALL RECORDS
Credential.getAllCredential = function (result) {
  sql.query("Select * from credentialtable", function (err, res) {
          if(err) {
            console.log("error: ", err);
            result(null, err);
          }
          else{
            console.log('credentialtable : ', res);  
            result(null, res);
          }
      });   
};


//  FUNCTION FOR SHOWING RECORDS BY ID
Credential.getCredentialById = function (credentialid,result) {
  sql.query("Select * from credentialtable where credentialid = ? ", credentialid, function (err, res) {             
          if(err) {
            console.log("error: ", err);
            result(err, null);
          }
          else{
            result(null, res);     
          }
      });   
};

//  FUNCTION FOR INSERTION
Credential.createCredential = function (newcredential,result) {    
        sql.query("INSERT into credentialtable set ?",newcredential, function (err, res) {
                if(err) {
                          console.log("error: ", err);
                          result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                 
                }
            });           
};

// //FUNCTION FOR UPDATING Password
// Credential.updateById = function(credentialid,password, result){
//   sql.query( `UPDATE credentialtable SET  password= "${password}" WHERE credentialid = ?` ,credentialid, function (err, res) {
//           if(err) {
//                 console.log("error: ", err);
//                 result(null, err);
//              }
//            else{   
//              result(null, res);
//             }
//     }); 
// };

//FUNCTION FOR DELETE
Credential.remove = function(credentialid, result){
    sql.query("DELETE  from credentialtable WHERE credentialid= ?", [credentialid], function (err, res) {
                if(err) {
                    result(null, err);
                   console.log("error: ", err);
                 }
                else{
                    result(null, res);
                }
            }); 
};

module.exports=Credential;