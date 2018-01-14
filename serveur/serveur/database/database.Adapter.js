var {db, target, position } = require('./db.js');

function getDeviceList() {
  return db;
}


module.exports = {
  getDeviceList
}
