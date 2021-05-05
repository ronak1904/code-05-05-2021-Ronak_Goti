const express = require("express");
const bodyparser = require("body-parser");
const app = express();
app.get('',(req,res) => {
    res.send("vdf")

});



app.listen(3000,(res) =>  {
    var users = require("./input");
    var temp=require("./calculate")
    
     for(var i=0;i<users.length; i++)
     {

      temp(users[i].WeightKg,users[i].HeightCm);
         
     }
   
    console.log("port active at 3000")
});