const express = require('express');
var matchesAPIRouter = express.Router();

matchesAPIRouter.get('/',function(req,res,next){
  res.send("get all matches from mongodb");
})

module.exports = matchesAPIRouter;
