var films = require('../client/src/models/films');
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

var express = require('express');
var filmRouter = new express.Router();

// FIND
filmRouter.get("/", function(req, res){
  res.json({data: films});
})
// GET ALL
// CREATE
// UPDATE
// DELETE
