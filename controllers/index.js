var express = require('express');
var router = new express.Router();

router.use('/films', require('./films'));

router.get('/api', function(req, res){
  res.json({data: "Welcome!"});
})

module.exports = router;
