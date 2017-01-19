var request = require('request')

module.exports = class AirtonV1Driver {
    constructor(ipaddress) {
        this.ip = ipaddress;
        this.baseUrl = "http://" + ipaddress;
	    this.power = undefined;
    }


	get types() {
		return ["switch", "temperature"];
	}

	setSwitch(value){
		if(value) {
			return this.setOn();
		} else {
			return this.setOff();
		}
	}

    get temperature() {
        return new Promise((resolve, reject) => {
            request(this.baseUrl + "/getTemperature", function(err, response, body) {
                if (err) return reject(err);
                return resolve({
                    temperature: body
                });
            });
        });
    }

    setOn() {
        return new Promise((resolve, reject) => {
            request(this.baseUrl + "/on", (err, response, body) => {
                if (err) return reject(err);
		    this.power = true;
                return resolve({
                    power: this.power
                });

            });
        })
    }

    setOff() {
        return new Promise((resolve, reject) => {
            request(this.baseUrl + "/on", (err, response, body) => {
                if (err) return reject(err);
                this.power = false;
		    return resolve({
                    power: this.power;
                });

            });
        })

    }
	status() {
		return new Promise((resolve, reject) => {
			this.temperature
				.then(function(temp){

				});	
		})
	}
}
