import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Echo endpoint that responds with request details
app.all('*', (req: Request, res: Response) => {
  res.json({
    method: req.method,
    headers: req.headers,
    body: req.body,
    url: req.url
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Log Forwarder running at http://localhost:${port}`);
});
