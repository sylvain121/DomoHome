#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>

uint8_t lsb_first(uint8_t value)
{
  uint8_t result=0;

  for( int i = 0; i< 8; i++){
    result = result << 1;
    if(value & 0x01)
    {
      result +=1;

    }
    value = value >> 1;
  }

  return result;

}

void Airton(uint8_t power, uint8_t mode, uint8_t temperature, uint8_t flowControl)
{
  uint8_t *raw = malloc(14 * sizeof(uint8_t));
  raw[13] = 0x15 + power + mode +temperature + flowControl;  //checksum
  // allocate raw

  raw[0] = 0xC4;
  raw[1] = 0xD3;
  raw[2] = 0x64;
  raw[3] = 0x80; //ADDRESS
  raw[4] = 0x00;
  raw[5] = lsb_first(power);
  raw[6] = lsb_first(mode);
  raw[7] = lsb_first(temperature);
  raw[8] = lsb_first(flowControl);
  raw[9] = 0x00;
  raw[10] = 0x00;
  raw[11] = 0x00;
  raw[12] = 0x00;

  for(int i = 0; i < 13 ; i++)
  {
    for(int y = 0; y < 8; y++)
    {
      if(raw[i] && 1)
      {
        printf("1");
      } else {
        printf("0");
      }

      raw[i] << 1;

    }
    printf(" ");
  }

}





int main ( int arc, char **argv ) {

uint8_t power = 0x24;
uint8_t mode = 7;
uint8_t temperature = 1;
uint8_t flowControl =56;

Airton(power, mode, temperature, flowControl);


  return 0;
}

