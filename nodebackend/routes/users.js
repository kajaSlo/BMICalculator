var express = require('express');
var router = express.Router();

// Get User Model
var User = require('../models/user');

//Get all users

// router.get('/names', function(req,res){
//     User.find({}, function(err,users){
//        if (err) console.log(err);
//       // res.json(users);

//        for (var i=0; i<users.length; ++i) {
//         console.log(users[i].name);
//         res.json(users[i].name);
//        // console.log("hello");
//     }
//    }); 
// });

router.get('/', function(req,res){
    User.find({}, function(err,users){
       if (err) console.log(err);
      res.json(users);
   }); 
});

// Exports
module.exports = router;