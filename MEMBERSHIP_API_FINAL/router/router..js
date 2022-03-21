'use strict';
module.exports = function(app) {
  var membershipController = require('../controllers/membershipcontroller'); 
  var Login= require('../model/membershiplogin');
  var Changepassword= require('../model/membershipchangepassword');
   //DEFINING ROUTES
  app.route('/membership/api')
     .get(membershipController.getAll)
     .post(membershipController.insert);
   


     
  app.route('/membership/api/:credentialId')
      .get(membershipController.getBy)
      //.put(membershipController.update)
      .delete(membershipController.remove);

  app.route('/membership/api/login')
      .post(Login.login);

      app.route('/membership/api/api/changepassword')
      .put(Changepassword.changepassword);


};