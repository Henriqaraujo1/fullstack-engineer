const express = require('express');
const apiRouter = express.Router();
const minionsRouter = require('./router/minions')
const meetingsRouter = require('./router/meetings')
const ideasRouter = require('./router/ideas')

apiRouter.use('/minions', minionsRouter)
apiRouter.use('/ideas', ideasRouter)
apiRouter.use('/meetings', meetingsRouter)

module.exports = apiRouter;
