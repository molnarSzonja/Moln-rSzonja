
const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

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
  {
    id: 4,
    text: "puszi",
    author: "Katalin Boráros"
  },
  {
    id: 5,
    text: "papapaa",
    author: "Katalin Boráros"
  },
  {
    id: 6,
    text: "Menő vagy cica",
    author: "Katalin Boráros"
  },
  {
    id: 3,
    text: "Menő vagy cica",
    author: "Katalin Boráros"
  },
  {
    id: 3,
    text: "Menő vagy cica",
    author: "Katalin Boráros"
  },
  {
    id: 3,
    text: "Menő vagy cica",
    author: "Katalin Boráros"
  },
  {
    id: 3,
    text: "Menő vagy cica",
    author: "Katalin Boráros"
  }
];

app.get('/api/quotes', (req, res) => {
  res.json(quotes);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

