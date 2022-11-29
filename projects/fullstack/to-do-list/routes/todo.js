const express = require('express');
const { create, read, removeTodo } = require('../controller/index');
const router = express.Router();

router.get('/todos', read);
router.post('/todo/create', create);
router.delete('/todo/:id', removeTodo);


module.exports = router;