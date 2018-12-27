var express = require('express');
var router = express.Router();
import * as airton from '../src/AirtonService/AirtonDriver';

/* GET home page. */
router.get('/', function(req: any, res: any, next:any) {
  res.render('index', { title: 'Express' });
});


router.get('/heating/:room/off', function(req:any, res:any) {
	airton.setOff();
});

//FIXME should be post
router.get('/heating/:room/:temperature', function(req:any, res:any, next:any) {
	const room = req.query.room; // currently ignoring room 
	const temp = req.query.temperature;
	airton.setOn24Hot();
});



module.exports = router;
