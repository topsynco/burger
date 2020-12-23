const express = require('express');
const router = express.Router();


const burger = require('../model/burger');
const orm = require('../config/orm')



router.get("/", function (req, res){
    const getAllBurgers = orm.selectAll()

    getAllBurgers.then(function(data){
        res.render('index', {burgers: data})
    })
});

router.post("/", function(req,res){
  const postBurger = orm.insertBurger(req.body.burger_name);


  postBurger.then(function(data){
      res.json({id: data})
  })
});

router.put("/:id", function(req,res){
    const eatBurger = orm.updateBurger(true, req.params.id)

    eatBurger 
      .then(function(){
          res.status(200).end();
      })
});



module.exports = router;