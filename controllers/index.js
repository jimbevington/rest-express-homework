var express = require('express');
var router = new express.Router();
var path = require("path");

router.use('/api/films', require('./films'));

//  does this EXPLICITLY, if not specified looks for an Index file
router.get('/api', function(req, res){
  res.sendFile(path.join(__dirname + "/../client/build/index.html"));
});

//   res.json('Films! Find them, view them, update them, delete them!');
// })

module.exports = router;
