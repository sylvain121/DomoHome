var mdns = require('mdns');


module.exports.init = function(newThingConnectionHandler, thingDisconnectionHandler) {

  var moduleBrowser = mdns.createBrowser(mdns.tcp('IoTModule'));


  moduleBrowser.on('serviceUp', function(service) {
    console.log("service up : ", service);
  });

  moduleBrowser.on('ServiceDown', function(service) {
    console.log('service down : ', service);
  });

  moduleBrowser.start();
}

