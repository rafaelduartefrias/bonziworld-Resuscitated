const express = require('express');
const path = require('path');
const io = require('socket.io');
const app = express();
const port = 8000;

app.use(express.static(path.join(__dirname, 'client')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

io.on('connection', (socket) => {
  // PLACEHOLDER
});

app.listen(port, () => {
    console.log(`Ported Into the http://localhost:${port}`);
});
