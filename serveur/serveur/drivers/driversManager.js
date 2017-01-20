var airtonV1Driver = require('./airton.V1.driver.js');


module.exports.getDriverByName(thing) {
  return new Promise((resolve, reject) => {
 switch(thing.driver.name) {
    case "airton.V1.driver.js":
      thing.driver.object = new airtonV1Driver(thing.ipV4Address);
      break;
   default:
     return reject("unknow driver name : "+ thing.driver.name);
  }
    return resolve(thing);


  })


}
