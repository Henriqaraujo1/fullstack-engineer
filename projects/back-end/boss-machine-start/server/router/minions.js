const express = require("express");
const minionsRouter = express.Router();
const db = require("../db");

minionsRouter.get("/", (req, res) => {
  res.status(200).send(db.getAllFromDatabase("minions"));
});

minionsRouter.post("/", (req, res) => {
  const minion = req.body;
  console.log(minion);
  try {
    const NewMinion = db.addToDatabase("minions", minion);
    res.status(201).send(NewMinion);
  } catch (e) {
    console.error(e);
    res.sendStatus(404);
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
  res.status(200).send(req.findMinionId)
});

minionsRouter.put("/:minionId", (req, res) => {
  const minionIdEdit = req.body;
  try {
    const editMinion = db.updateInstanceInDatabase("minions", minionIdEdit)
    res.status(200).send(editMinion)
  } catch (e) {
    console.error(e.message);
    res.sendStatus(404)
  }
})

minionsRouter.delete('/:minionId', (req, res) => {
  const minionIdDelete = req.findMinionId.id;
  try {
    const deleteMinion = db.deleteFromDatabasebyId("minions", minionIdDelete)
    res.status(204).send(deleteMinion)
  } catch (e) {
    console.error(e.message)
    res.sendStatus(400)
  }
})

//Get router from work
minionsRouter.get('/:minionId/work', (req, res) => {
  const minionWork = db.getFromDatabaseById('work', req.findMinionId.id)
  const response = []
  if(minionWork) {
    response.push(minionWork)
  }
  res.status(200).send(response)
})

minionsRouter.post('/:minionId/work', (req, res) => {
  const newWork = req.body;
  newWork.minionId = req.findMinionId.id
  const work = db.addToDatabase('work', newWork)
  res.status(201).send(work)
})

minionsRouter.param('workId', (req, res, next, id) => {
  const findWorkId = db.getFromDatabaseById('work', id)
  if(!findWorkId) {
    res.status(500).send()
  } else {
    req.findWorkId = findWorkId;
    next()
  }
})

minionsRouter.put('/:minionId/work/:workId', (req, res) => {
  const work = req.body;
  try {
    const editWork = db.updateInstanceInDatabase('work', work);
    res.status(200).send(editWork) 
  } catch (e) {
    console.error(e.message);
    res.sendStatus(400)
  }
})

minionsRouter.delete('/:minionId/work/:workId', (req, res) => {
  const workIdDelete = req.params.workId;
  try {
    const deleteWork = db.deleteFromDatabasebyId('work', workIdDelete)
    res.status(204).send(deleteWork)
  } catch (e) {
    console.error(e.message)
    res.sendStatus(404)
  }
})

module.exports = minionsRouter;
