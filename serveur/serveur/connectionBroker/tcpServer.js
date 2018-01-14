const MESSAGE_IDENTIFY = Buffer.from([0x01]);
const MESSAGE_ECHO = Buffer.from([0x02]);
const MESSAGE_EMIT = Buffer.from([0x03]);
var buffer_length = Buffer.alloc(4);
var buffer_freq = Buffer.alloc(4);
buffer_freq.writeInt32BE(38);
var net = require('net');
var rawData = [2944, 1784, 416, 1132, 392, 1160, 412, 412, 388, 436, 392, 500, 348, 1140, 408, 420, 404, 428, 412, 1136, 388, 1160, 388, 436, 392, 1156, 416, 408, 420, 408, 416, 1132, 416, 1148, 416, 408, 416, 1132, 416, 1116, 412, 432, 392, 432, 416, 1128, 396, 432, 420, 448, 388, 1136, 392, 432, 392, 432, 416, 408, 420, 432, 368, 432, 416, 408, 420, 420, 416, 408, 392, 432, 420, 404, 420, 416, 412, 416, 376, 464, 392, 404, 420, 432, 408, 432, 392, 408, 392, 1152, 424, 404, 420, 404, 420, 1136, 412, 408, 420, 420, 416, 1136, 416, 404, 420, 476, 348, 404, 420, 404, 424, 404, 420, 404, 420, 420, 420, 1128, 420, 1128, 396, 1160, 412, 408, 420, 404, 416, 436, 392, 412, 388, 456, 384, 1160, 416, 412, 412, 1124, 424, 1124, 428, 1124, 420, 1128, 424, 404, 416, 424, 416, 416, 412, 404, 420, 404, 396, 448, 376, 440, 384, 432, 420, 404, 420, 424, 412, 408, 392, 432, 392, 504, 324, 432, 416, 412, 416, 476, 324, 444, 380, 456, 408, 420, 404, 416, 384, 432, 416, 408, 392, 432, 396, 428, 396, 432, 416, 424, 416, 408, 416, 408, 420, 408, 388, 436, 416, 408, 420, 404, 416, 408, 392, 448, 420, 404, 416, 1132, 420, 1128, 420, 1128, 396, 1156, 392, 1156, 416, 1132, 392, 440, 416];
console.log(rawData.length);

var buffer = Buffer.alloc(4*rawData.length)

rawData.map((value, index) => {
  return buffer.writeInt32BE(value,4*index);
});
console.log(buffer.length/4);
buffer_length.writeInt32BE(buffer.length/4);


console.log(buffer);

var server = net.createServer(function(socket) {
  console.log("new client connect");
  socket.on("data", (data) => {
    console.log(data);

    function loop() {
      console.log("sending frame");
      const b = Buffer.concat([MESSAGE_EMIT,buffer_freq, buffer_length, buffer], 10+buffer.length); 
      console.log(b);
      console.log(b.length);
      socket.write(b);
      setTimeout(loop, 2000);
    }

    loop();

  });
  //    new IotObject(socket);
});

server.listen(10240, () => {
  console.log("listening on port 10240");
});


