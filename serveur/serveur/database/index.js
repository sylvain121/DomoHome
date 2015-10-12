var db = {};
var Datastore = require('nedb');

// db instances
db.network = new Datastore({ filename: '../../db/network.db', autoload: true });
db.network.loadDatabase();


// Export
module.exports.db = db;