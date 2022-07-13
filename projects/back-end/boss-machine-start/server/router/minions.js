const express = require("express");
const minionsRouter = express.Router();
const db = require("../db");

minionsRouter.get("/", (req, res) => {
  res.status(200).send(db.getAllFromDatabase("minions"));
});

minionsRouter.post("/", (req, res, id) => {
  const minion = req.body;
  console.log(minion);
  try {
    const NewMinion = db.addToDatabase("minions", minion);
    res.status(201).send(NewMinion);
  } catch (e) {
    console.error(e);
    res.sendStatus(400);
  }
});

minionsRouter.param('minionId', (req, res, next, id) => {
  const findMinionId = db.getFromDatabaseById("minions", id);
  if(!findMinionId) {
    res.status(404).send("Not Found the Minion")
  } else {
    req.findMinionId = findMinionId;
    next()
  }
})

minionsRouter.get("/:minionId", (req, res) => {
  res.status(201).send(req.findMinionId)
});

minionsRouter.put("/:minionId", (req, res) => {
  const minionIdEdit = req.body;
  try {
    const editMinion = db.updateInstanceInDatabase("minions", minionIdEdit)
    res.status(201).send(editMinion)
  } catch (e) {
    console.error(e.message);
    res.sendStatus(404)
  }
})

module.exports = minionsRouter;
