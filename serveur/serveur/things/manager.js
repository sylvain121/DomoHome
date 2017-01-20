var request = require('request');
var driverManager = require('../drivers/driversManager.js');
var things = [];


function newThingConnectionHandler(ipV4Address) {
  getModuleInfo(ipV4Address)
    .then(thing => {
      return driverManager.getDriverbyName(things)
    })
    .then(thing => {
      things.push(thing);
    })
    .catch(err => {
      console.err(err);
    });
}


function thingDisconnectionHandler(ipV4Address) {
  things = things.filter(thing => {
    return thing.ip != ipV4Address;
  });
}


function getModuleInfo(ipV4Address) {
  return new Promise((resolve, reject) => {
    request("http://" + ipV4Address + "/info",
      (err, response, body) {
        if(err) return reject(err);
        var thing = {
          ipV4Address: ipV4Address,
          driver: {
            name : body.driverName,
            object: null
          }
        };
        return resolve(thing);
      });
  });
}

module.exports = {
  newThingConnectionHandler,
  thingDisconnectionHandler
}

