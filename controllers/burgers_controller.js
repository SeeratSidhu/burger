var express = require("express");
var router = express.router();

var burger = require("../model/burger");

router.get("/", function(req, res){
    burger.selectAll((data) => {
       var hbsObject = {
           burger: data
       };
       res.render("index", hbsObject);
    });
});

router.post("/api/burger", function(req, res){
    burger.insertOne(["burger_name", "devoured"], [req.body["burger_name"], req.body.devoured], (result)=> {
        res.json(result);
    });
});

router.put("/api/burger/:id", function(req, res){
    var condition = "id = " + req.params.id;
    burger.updateOne(["devoured"], [req.body.devoured], condition, (result) => {
        res.json(result);
    });
});

module.exports = router;