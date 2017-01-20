var AirtonV1Driver = require('../../serveur/drivers/airton.V1.driver.js');


describe("airtonV1.driver.js", function(){
	it("should test this context", function(done){
		var test = new AirtonV1Driver("127.0.0.1");
    console.log(test.clim.on());
    done();
	});
})



