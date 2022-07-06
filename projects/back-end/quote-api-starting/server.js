const { application, query } = require("express");
const express = require("express");
const app = express();

const { quotes } = require("./data");
const { getRandomElement } = require("./utils");

const PORT = process.env.PORT || 4001;

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`The server is Running in ${PORT}`);
});

app.get("/api/quotes", (req, res, next) => {
  let findAuthor = req.query.person;
  if (findAuthor === undefined) {
    res.send({
      quotes: quotes,
    });
  } else if(findAuthor) {
    const quotesFind = quotes.filter(author => author.person === findAuthor)
    res.send({quotes: quotesFind})
  } else {
    res.status(404).send('Sorry not found');
  }
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

app.post("/api/quotes", (req, res, next) => {
  const newText = req.query.quote;
  const newPerson = req.query.person;
  if (newText.length >= 0  && newPerson.length >= 0) {
    const newQoutes = {
      quote: newText,
      person: newPerson,
    };
    quotes.push(newQoutes)
    res.send({quote: newQoutes})
  } 
});
