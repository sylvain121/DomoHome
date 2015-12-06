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
#define MSG_SEND_IR  0xFF

IRsend irsend;
byte* floatPtr;
float temp;
unsigned int on_hot_24c[] = {2944, 1784, 416, 1132, 392, 1160, 412, 404, 424, 404, 420, 404, 420, 420, 420, 1128, 420, 1128, 396, 1160, 412, 408, 420, 404, 416, 436, 392, 412, 388};
void setup(){
  TinyWireS.begin(I2C_SLAVE_ADDR);      // init I2C Slave mode
}


void loop(){
  char command = 0;
  //irsend.Airton(0x24, 0x02, 0x07,0x38);
  irsend.sendRaw(on_hot_24c, 29,38);
  delay(200);
  /*if (TinyWireS.available())
  {           // got I2C input!
    byte command = TinyWireS.receive();     // get the byte from master
      if(command == MSG_SEND_IR ) 
      {
        char power = TinyWireS.receive();
        char mode =  TinyWireS.receive();
        char temperature = TinyWireS.receive();
        char flowControl = TinyWireS.receive();
        irsend.Airton(power, mode, temperature,flowControl);
        TinyWireS.send(0xFF);
      } 
      else if (command == MSG_GET_TEMP )
      {
        getTemperature();
        floatPtr = (byte*) &temp;
        TinyWireS.send( *floatPtr );  // send first byte
        ++floatPtr;
        TinyWireS.send( *floatPtr );  // the second
        ++floatPtr;
        TinyWireS.send( *floatPtr );  // third
        ++floatPtr;
        TinyWireS.send( *floatPtr );  // fourth and final byte
      }
       else 
       {
         TinyWireS.send(command);
       }    
  }*/
}

void getTemperature() {

	temp = analogRead(LM35_SENSOR_PIN);
	temp = temp * 0.48828125;
}



