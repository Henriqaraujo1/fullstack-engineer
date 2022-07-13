const express = require("express");
const ideasRouter = express.Router();
const db = require("../db");

ideasRouter.get("/", (req, res) => {
  res.status(200).send(db.getAllFromDatabase("ideas"));
});

ideasRouter.post("/", (req, res) => {
  const idea = req.body;
  try {
    const newIdea = db.addToDatabase("ideas", idea);
    res.status(201).send(newIdea);
  } catch (e) {
    console.error(e.message);
    res.sendStatus(400);
  }
});

ideasRouter.get("/:ideaId", (req, res) => {
  const ideaId = req.params.ideaId;
  try {
    const findIdeadId = db.getFromDatabaseById("ideas", ideaId);
    res.status(201).send(findIdeadId);
  } catch (e) {
    console.error(e.message);
    res.sendStatus(404);
  }
});

module.exports = ideasRouter;
