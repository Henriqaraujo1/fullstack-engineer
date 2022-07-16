const checkMillionDollarIdea = (req, res, next) => {
  const idea = req.body;
  console.log(`Running ${idea}`);
  if (!idea || !idea.weeklyRevenue || !idea.numWeeks) {
    res.status(400).send({ error: "idea not value" });
  } else {
    const ideaVal = idea.numWeeks * idea.weeklyRevenue;
    if (!ideaVal || ideaVal < 1000000) {
      res.status(400).send({ error: "idea is not a value to grow R$: 1.000,000" });
    } else {
      next();
    }
  }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
