const db = require('../database/database.Adapter.js');
const _ = require('lodash');
const { TcpIotObject } = require('./TcpIotObject.class.js');

var databaseDeviceList = db.getDeviceList();
var objectList = [];




function linkNewTcpHardware(socket) {
var object = new TcpIotObject(socket);
  if(objectList.find(isNewObject) === undefined) {
    objectList.push(object);
  }

  function isNewObject(element) {
    return element.uuid === object.uuid;
  }
}
