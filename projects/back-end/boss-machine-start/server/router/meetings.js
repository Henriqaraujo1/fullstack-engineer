const express = require("express");
const meetingsRouter = express.Router();
const db = require("../db");

meetingsRouter.get("/", (req, res) => {
  res.status(200).send(db.getAllFromDatabase("meetings"));
});3

meetingsRouter.post("/new", (req, res) => {
  const meeting = req.body;
  try {
    const newMeeting = db.addToDatabase("meetings", meeting);
    res.status(201).send(newMeeting);
  } catch (e) {
    console.error(e.message);
    res.sendStatus(400);
  }
});

meetingsRouter.delete("/", (req, res) => {
  try {
    const deleteMeetings = db.deleteAllFromDatabase("meetings")
    res.status(201).send(deleteMeetings)
  } catch (e) {
    console.error(e.message);
    res.sendStatus(404)
  }
  
})

module.exports = meetingsRouter;
