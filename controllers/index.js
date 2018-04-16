var express = require('express');
var router = new express.Router();

router.use('/films', require('./films'));

router.get('/api', function(req, res){
  res.json('Films! Find them, view them, update them, delete them!');
})

module.exports = router;
