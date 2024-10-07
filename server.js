
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
  {
    id: 3,
    text: "A mérnökség az, ami a tudományok között hidat képez, lehetővé téve, hogy a tudományos elméletek gyakorlati formát öltsenek.",
    author: "Gottfried Wilhelm Leibniz"
  },
  {
    id: 4,
    text: "A tanulás a tudás kulcsa, de a tudás csak az út, a tapasztalat a cél.",
    author: "Benjamin Franklin"
  },
  {
    id: 5,
    text: "A tudás a legértékesebb ajándék, amit egy ember kaphat.",
    author: "Plato"
  },
  {
    id: 6,
    text: "A tanulás a legnagyobb befektetés, amelyet egy ember valaha is tehet.",
    author: "Winston Churchill"
  },
  {
    id: 7,
    text: "A tudás nemcsak hatalom, hanem kulcs is, amely megnyitja a siker kapuit",
    author: "Dale Carnegie"
  },
  {
    id: 8,
    text: "A tanulás a legnagyobb fegyver, amellyel a világ megváltoztatására használhatunk.",
    author: "Nelson Mandela"
  },
  {
    id: 9,
    text: "A tanulás a tapasztalatok összegyűjtése. Az intelligencia pedig az, hogy mit kezdesz a tapasztalataiddal.",
    author: "Albert Einstein"
  }
];

app.get('/api/quotes', (req, res) => {
  res.json(quotes);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

