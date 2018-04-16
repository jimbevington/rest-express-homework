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
})

// UPDATE
filmRouter.put("/:id", function(req, res){
  films[req.params.id] = req.body.film;
  res.json(films);
})

// DELETE
filmRouter.delete("/:id", function(req, res){
  films.splice(req.params.id, 1);
  res.json(films);
})

module.exports = filmRouter;
