var express = require('express');
var router = express.Router();
var ping = require('../serveur/homeInterfaces/network/ping');

/**
 * ping command like /network/ping/ipaddress ( V4 only )
 */
router.get('/ping/:ip', function(req, res) {
    var ip = req.params.ip;
    ping.doPing(ip, function(err, result){
        if(err){
            res.send(err);
        }
        else {
            res.send(result);
        }
    });

});

/**
 * wake on lan network machine /networl/wol/**macAddress**
 * @type {router|exports}
 */

var wol = require('../serveur/homeInterfaces/network/wol');
router.get('/wol/:mac', function(req, res) {
    var mac = req.params.mac;
    wol.doWol(mac, function(err, result){
        if(err){
            res.send(err);
        }
        else {
            res.send(result);
        }
    });
});

module.exports = router;
