#include <IRremoteESP8266.h>
#include <IRremoteInt.h>



#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266WebServer.h>
#include <ESP8266mDNS.h>

const char* ssid = "lereseauwifi";
const char* password = "lacleewpa2";
const int relais = 2;
MDNSResponder mdns;

ESP8266WebServer server(80);

char power = 0x24; //power on
char temperature = 0x10; // 23C
char mode = 0x01; //hot
char flowcontrol = 0xDC; // fans speed medium / flap


IRsend irsend(4); //an IR emitter led is connected to GPIO pin 4

void handleRoot() {
	server.send(200, "text/plain", "{\"module\": \"climatiseur\", \"location\":\"salon\", \"type\":\"esp8266\"}");

}

void handleNotFound(){
	String message = "File Not Found\n\n";
	message += "URI: ";
	message += server.uri();
	message += "\nMethod: ";
	message += (server.method() == HTTP_GET)?"GET":"POST";
	message += "\nArguments: ";
	message += server.args();
	message += "\n";
	for (uint8_t i=0; i<server.args(); i++){
		message += " " + server.argName(i) + ": " + server.arg(i) + "\n";

	}
	server.send(404, "text/plain", message);

}

void send() {

irsend.Airton(power, mode, temperature, flowcontrol);

}

void setup(void){
	Serial.begin(9600);
	WiFi.begin(ssid, password);
	Serial.println("");

	// Wait for connection
	while (WiFi.status() != WL_CONNECTED) {
		delay(500);
		Serial.print(".");

	}
	Serial.println("");
	Serial.print("Connected to ");
	Serial.println(ssid);
	Serial.print("IP address: ");
	Serial.println(WiFi.localIP());

	if (mdns.begin("esp8266", WiFi.localIP())) {
		Serial.println("MDNS responder started");

	}

	server.on("/", HTTP_GET, handleRoot);

	server.on("/garage", [](){
			server.send(200, "text/plain", "ok garage actionned");
			Serial.println("10");
			delay(1500);

			});
	server.on("/command", "POST", command)

	server.onNotFound(handleNotFound);

	server.begin();
	Serial.println("HTTP server started");

}

void loop(void){
	server.handleClient();

}

void command() {
//String username = server.arg("abc"); // access body json data
send();


}
