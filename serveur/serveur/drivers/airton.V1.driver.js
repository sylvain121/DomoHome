var request = require('request')

module.exports = class AirtonV1Driver {
  constructor(ipaddress) {
    this.ip = ipaddress;
    this.baseUrl = "http://" + ipaddress;
    this.power = undefined;
  }


  get types() {
    return [{
      type: "switch",
      id: "clim"
    }, {
      type: "temperature",
      id: "temperature"
    }];
  }

  get clim() {
    var that = this;
    return {
      on: function() {
        return new Promise((resolve, reject) => {
          request(that.baseUrl + "/on", (err, response, body) => {
            if (err) return reject(err);
            that.power = true;
            return resolve({
              power: that.power
            });

          });
        })

      },
      off: function() {
        return new Promise((resolve, reject) => {
          request(that.baseUrl + "/on", (err, response, body) => {
            if (err) return reject(err);
            that.power = false;
            return resolve({
              power: that.power
            });

          });
        })

      },
      status: this.power
    }
  }

  get temperature() {
    var that = this;
    return new Promise((resolve, reject) => {
      request(that.baseUrl + "/getTemperature", function(err, response, body) {
        if (err) return reject(err);
        return resolve({
          temperature: body
        });
      });
    });
  }
}

