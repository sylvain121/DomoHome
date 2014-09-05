var db = {};
var Datastore = require('nedb');

// db instances
db.i2c = new Datastore({ filename: '../../db/i2c.db', autoload: true });
db.network = new Datastore({ filename: '../../db/network.db', autoload: true });
