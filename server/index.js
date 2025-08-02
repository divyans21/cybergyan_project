const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.get('/vulnerable', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/vulnerable.html'));
});

app.get('/protected', (req, res) => {
//   res.setHeader("X-Frame-Options", "DENY"); // Prevent framing
//   res.setHeader("Content-Security-Policy", "frame-ancestors 'none';");
  res.sendFile(path.join(__dirname, '../views/protected.html'));
});

app.get('/iframe-loader', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/iframe-loader.html'));
});

app.listen(port, () => {
  console.log(`Clickjacking demo running at http://localhost:${port}`);
});
