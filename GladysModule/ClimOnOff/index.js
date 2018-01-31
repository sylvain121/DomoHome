const clim = require("./lib/tcpServer.js");

module.exports = function(sails) {
	return {
		exec: function(params) {
			switch(params) {
				case "on":
					clim.setOn24Hot();
					break;
				case "off":
					clim.setOff();
			}
		}
	};
}
