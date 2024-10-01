
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const quotes = [
  {
    id: 1,
    text: "Engineering is the art of directing the great sources of power in nature for the use and convenience of man.",
    author: "Thomas Tredgold"
  },
  {
    id: 2,
    text: "Scientists study the world as it is; engineers create the world that has never been.",
    author: "Theodore von Karman"
  },
];

app.get('/api/quotes', (req, res) => {
  res.json(quotes);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

