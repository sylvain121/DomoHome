var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/heating/:room/:temperature', function(req, res, next) {
	const room = req.query.room;
	const temp = req.query.temperature;


});


module.exports = router;
