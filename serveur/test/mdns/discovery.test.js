var mdns = require('mdns');
var service = require('../../serveur/mDns/discovery.js');

describe("/server/mdns/discovery.js", function() {
  describe("moduleBrowser service", function() {
    it("should detect new IoTModule service", function(done) {
      // advertise a http server on port 4321
      var ad = mdns.createAdvertisement(mdns.tcp('IoTModule'), 4321);
      ad.start();
    
      function newThingConnectionHandler() {

      }

      function thingDisconnectionHandler() {

      }

      service.init(newThingConnectionHandler, thingDisconnectionHandler);

    });
  });
});

