

class TcpIotObject {
  constructor(s) {
    this.tcpSocket = s;
    this.buffer = Buffer.alloc(0);

    this.socket.on('data', (data) => {
      this.handleInputMessage(data);
    });

    this.socket.on('end', () => {
      //close 
    });
    this.requestIdFrame();
    
  }
  handleInputMessage (rawData) {
       this.appendToBuffer(rawData); 
       this.getMessage();
  }

  appendToBuffer(rawData) {
    this.buffer = Buffer.concat([this.buffer, rawData], this.buffer.length+ rawData.length);
  }

  getMessage() {
    var type = this.readMessageTypefromBuffer();

  }

  requestIdFrame() {
    buf = Buffer.alloc(4);
    this.tcpSocket.write();
  }
}

module.exports.TcpIotObject = TcpIotObject;
