var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

var express = require('express');
var filmRouter = new express.Router();

// GET ALL
filmRouter.get("/", function(req, res){
  res.json(films);
})

// FIND
filmRouter.get("/:id", function(req, res){
  res.json({data: films[req.params.id]});
})

// CREATE
filmRouter.post("/", function(req, res){
  films.push(req.body.film);
  res.json(films)
;})
// UPDATE
// DELETE
module.exports = filmRouter;
