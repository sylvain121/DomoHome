#include <TinyWireS.h>

#include <IRremoteInt.h>
#include <IRremote.h>

/* ATtiny85 as an Airton InfraRed climatisation module
 * Sylvain121
 * AtTiny85 pin setup:
 * ATtiny Pin 1 = (RESET) N/U                   ATtiny Pin 2 = (D3) N/U
 * ATtiny Pin 3 = IR SEND	                      ATtiny Pin 4 = GND
 * ATtiny Pin 5 = I2C SDA                       ATtiny Pin 6 = LM35 sensor input
 * ATtiny Pin 7 = I2C SCK                       ATtiny Pin 8 = VCC (2.7-5.5V)
 * NOTE! - It's very important to use pullups on the SDA & SCL lines!
 * Current Rx & Tx buffers set at 32 bytes - see usiTwiSlave.h
 * Credit and thanks to Don Blake for his usiTwiSlave code. 
 * More on TinyWireS usage - see TinyWireS.h
 */

#define I2C_SLAVE_ADDR  0x26            // i2c slave address (38)
#define AIRTON_IR_SEND_PIN      4              // ATtiny Pin 3
#define LM35_SENSOR_PIN         1              // ATtiny Pin 6


#define MSG_GET_TEMP 0x80
#define MSG_SEND_IR	 0xFF

IRsend irsend;

void setup(){
  TinyWireS.begin(I2C_SLAVE_ADDR);      // init I2C Slave mode
}


void loop(){
  char command = 0;
  if (TinyWireS.available()){           // got I2C input!
    byte command = TinyWireS.receive();     // get the byte from master
	switch(command) {
      case MSG_SEND_IR:
      {
        char power = TinyWireS.receive();
        char mode =  TinyWireS.receive();
        char temperature = TinyWireS.receive();
        char flowControl = TinyWireS.receive();
        irsend.Airton(power, mode, temperature,flowControl);
        TinyWireS.send(0xFF);
      }
      case MSG_GET_TEMP:
      {
        TinyWireS.send(getTemperature());
      } 
  	}    
  }
}

char getTemperature() {

	/*int val = analogRead(LM35_SENSOR_PIN);
	float mv = (val/1024.0)*5000;
	byte cel = mv/10;
	return cel; */	
  return 1;
}



