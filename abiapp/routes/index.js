var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Hellsite (affectionate)' });
  res.redirect('/catalog'); //reroutes to path/catalog
});

module.exports = router;
