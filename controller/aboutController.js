var express = require('express');
var router = express.Router({ mergeParams: true });
var aboutController = require('../controller/aboutController');

/* GET about page. */
router.get('/about', function (req, res, next) {
  res.render('about/index', { title: 'About' });
});

module.exports = router;