/*
Attiny85 remote air conditionner control with I2C bus

                  +-\/-+
        (RESET)  1|    |8  VCC (2.7-5.5V)
      Temp Read  2|    |7  I2C   SCK -> To server
                 3|    |6  (PB1) IR_SEND
            GND  4|    |5  I2C   SDA -> To server
                  +----+ 
*/

#include "TinyWireS.h"
#include "airton.h"

#define I2C_SLAVE_ADDR 0x27 // I2C slave address

#define TEMP_READ        3  // Temperature read on pin 2 (ADC3)
#define IR_SEND          6  //  

byte      byteRcvd;

void setup() {
  pinMode(TEMP_READ,INPUT);
  TinyWireS.begin(I2C_SLAVE_ADDR);


}

void loop() {

    if(TinyWireS.available()){ // if we get an I2C message
    int result;          
    byteRcvd = TinyWireS.receive(); 
    if(byteRcvd > 0 && byteRcvd < 4) {
      // air conditionner 
      TinyWireS.send(sendToAirton(byteRcvd));
    }
    else if(byteRcvd == 5) {
      // get temperature
    }
    else {
      TinyWireS.send();
      float value = analogRead(TEMP_READ);
      float tempc=(value*5)/10; 
      TinyWireS.send(tempc);
    }
  }

}