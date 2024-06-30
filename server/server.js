// server/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

let leftClicks = 0;
let rightClicks = 0;

app.use(cors());
app.use(express.json());

app.post('/clicks', (req, res) => {
  const { direction } = req.body;
  if (direction === 'left') {
    leftClicks += 1;
  } else if (direction === 'right') {
    rightClicks += 1;
  }
  console.log(`Left Clicks: ${leftClicks}, Right Clicks: ${rightClicks}`);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
