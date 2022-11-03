const express = require('express');
const router = express.Router();

const {addTask,getTasks,deleteTask,markTask} = require("./../controller/controller");

router.post('/addTask',(addTask));

router.get('/getTasks',(getTasks));

router.delete('/deleteTask/:id',(deleteTask));

router.put('/markTask/:id',(markTask));

module.exports = router;