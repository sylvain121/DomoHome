var ping = require ("net-ping");

var session = ping.createSession ();

/**
 * do a ping into the network
 * @param ip : ip address
 * @param callback Function{error,result
 */
module.exports.doPing = function (ip, callback) {
    session.pingHost(ip, function (error, target) {
        if (error)
            return callback('host unreachable');
        else
            return callback( null,'ok');
    });
};

