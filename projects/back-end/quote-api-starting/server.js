const { application } = require("express");
const express = require("express");
const app = express();

const { quotes } = require("./data");
const { getRandomElement } = require("./utils");

const PORT = process.env.PORT || 4001;

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`The server is Running in ${PORT}`);
});

app.get("/api/quotes/random", (req, res, next) => {
  const quotesRandom = getRandomElement(quotes);
  if (quotesRandom) {
    res.send({
      quote: quotesRandom,
    });
    res.status(200).send();
  } else {
    res.status(404).send();
  }
});

app.get("/api/quotes/", (req, res, next) => {
  const personFind = req.query.person;
  const qoutesFind = [];
  const id = 0;
  if (personFind) {
    quotes.forEach((quote, id) => {
      if ((quote.person = personFind)) {
        qoutesFind.push({
          id: id,
          quote: quote.quote,
          person: personFind
        });
      }
    });
  } else {
    quotes.forEach((quote) => {
      qoutesFind.push(quote.quote);
    });
  }
  const returnArray = {
    quotes: qoutesFind,
  };
  res.send(returnArray);
});
