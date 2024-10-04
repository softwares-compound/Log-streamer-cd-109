import express, { Request, Response } from 'express';
import net from 'net';

const app = express();
const port = 5000;
const tcpPort = 3000;  // Port to receive logs from Logstash

// Middleware to parse JSON request bodies
app.use(express.json());

// Echo HTTP endpoint that responds with request details
app.all('*', (req: Request, res: Response) => {
  res.json({
    method: req.method,
    headers: req.headers,
    body: req.body,
    url: req.url
  });
});

// Start the HTTP server
app.listen(port, () => {
  console.log(`HTTP Test server running at http://localhost:${port}`);
});


// ==================================//
// ==================================//

// Create a TCP server to receive logs
const tcpServer = net.createServer((socket) => {
  console.log('TCP client connected');

  // Handle incoming data (log messages)
  socket.on('data', (data) => {
    try {
      const logMessage = JSON.parse(data.toString());
      console.log('Received log:', logMessage);
    } catch (error) {
      console.error('Error parsing log data:', error);
    }
  });

  // Handle client disconnects
  socket.on('end', () => {
    console.log('TCP client disconnected');
  });
});

// Start listening on the TCP port
tcpServer.listen(tcpPort, '0.0.0.0', () => {
  console.log(`TCP server listening on port ${tcpPort}`);
});
