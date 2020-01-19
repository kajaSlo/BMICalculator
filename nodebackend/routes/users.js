var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function(req,res){
    User.find({}, function(err,users){
       if (err) console.log(err);
      res.json(users);
   }); 
});

router.post('/calculateBMI', function(req,res){
    var name = req.body.name;
    var age = req.body.age;
    var gender = req.body.gender;
    var weight = req.body.weight;
    var height = req.body.height;

    height = height/100;
    var bmi = weight / (height * height);
    bmi = Math.round(bmi * 100) / 100;

    if(bmi <= 0 || isNaN(bmi)){
        res.json("Bmi is less or equal than 0 or is not a number");
    }else{
        var user = new User({
            name: name,
            age: age,
            gender: gender,
            weight: weight,
            height: height
        });
    
        console.log(user);
    
        user.save(function (err) {
            if (err) {
                console.log(err);
            } else {                
                res.json(bmi);
            }
        });
    }
})

module.exports = router;