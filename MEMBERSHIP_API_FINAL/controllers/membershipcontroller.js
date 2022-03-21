'use strict';
var Credential = require('../model/membershipdal');

//CONSTRUCTORS....

// SHOWING ALL RECORDS 

exports.getAll = function(req, res) {
  Credential.getAllCredential(function(err, credential) {
    if (err)
      res.send(err);
    res.send(credential);
  });
};

// GET RECORD BY USING ID

exports.getBy = function(req, res) {
  Credential.getCredentialById(req.params.credentialId, function(err, credential) {
    if (err)
      res.send(err);
    res.json(credential);
  });
};

// INSERTING NEW RECORDS

exports.insert = function(req, res) {
  
  var new_credential = new Credential(req.body);
    Credential.createCredential(new_credential, function(err, credential) {
      if (err)
      res.send(err);
    res.json({ message: 'Credential Added' });
    });
};

// // UPDATE PASSWORD BY USING ID

// exports.update = function(req, res) {
//   Credential.updateById(req.params.credentialId,req.body.password, function(err, credential) {
//     if (err)
//       res.send(err);
//     res.json({ message: 'Credential successfully UPDATED' });
//   });
// };

// DELETING RECORD BY USING ID

exports.remove = function(req, res) {
  Credential.remove( req.params.credentialId, function(err, credential) {
    if (err)
      res.send(err);
    res.json({ message: 'Credential successfully DELETED' });
  });
};


