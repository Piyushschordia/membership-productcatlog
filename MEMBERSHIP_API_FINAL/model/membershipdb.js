// DATABASE CONNECTION
var mysql= require('mysql');

//DEFINE CONNECTION CONFIGURATION
var connection=mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'password',
    database:'credentialsdb',
    multipleStatements:true
});

connection.connect(function(err){
    if(err) throw err;

});


module.exports=connection;