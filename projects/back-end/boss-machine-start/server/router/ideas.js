const { Router } = require("express");
const express = require("express");
const checkMillionDollarIdea = require("../checkMillionDollarIdea");
const ideasRouter = express.Router();
const db = require("../db");

ideasRouter.get('/ideaId')

ideasRouter.get("/", (req, res) => {
  res.status(200).send(db.getAllFromDatabase("ideas"));
});


ideasRouter.post("/", checkMillionDollarIdea, (req, res) => {
  const ideaPost = req.body;
  try {
    const newIdea = db.addToDatabase("ideas", ideaPost);
    res.status(201).send(newIdea);
  } catch (e) {
    console.error(e.message);
    res.sendStatus(400);
  }
});

ideasRouter.param("ideaId", (req, res, next, id) => {
  const findIdeadId = db.getFromDatabaseById("ideas", id);
  if (!findIdeadId) {
    res.status(404).send("Not found the Idea");
  } else {
    req.findIdeadId = findIdeadId;
    next();
  }
});

ideasRouter.get("/:ideaId", (req, res) => {
  res.status(201).send(req.findIdeadId);
});

ideasRouter.put("/:ideaId", (req, res) => {
  const ideaEdit = req.body;
  try {
    const editIdea = db.updateInstanceInDatabase("ideas", ideaEdit);
    res.status(201).send(editIdea);
  } catch (e) {
    console.error(e.message);
    res.sendStatus(404);
  }
});

ideasRouter.delete('/:ideaId', (req, res) => {
  const ideaIdDelete = req.params.ideaId;
  try {
    const deleteIdea = db.deleteAllFromDatabase("ideas", ideaIdDelete);
    res.status(201).send(deleteIdea)
  } catch (e) {
    console.error(e.message)
    res.sendStatus(404);
  }
})



module.exports = ideasRouter;
