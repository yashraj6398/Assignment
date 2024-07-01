const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;

let counts = {
  left: 0,
  right: 0,
};

app.use(cors());
app.use(bodyParser.json());

app.post('/updateCount', (req, res) => {
  const { direction, count } = req.body;
  console.log(`Received direction: ${direction}, count: ${count}`); 
  if (direction === 'left' || direction === 'right') {
    counts[direction] = count;
    console.log(`Updated ${direction} count to: ${count}`);
  }
  res.json(counts);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});