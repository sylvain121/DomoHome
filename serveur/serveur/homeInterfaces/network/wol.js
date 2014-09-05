var wol = require('wake_on_lan');

module.exports.doWol = function(macAddress, callback){
    wol.wake(macAddress, function(error) {
        if (error) {
           return callback(error);
        } else {
            return callback('magic Pack send');
        }
    });
};

