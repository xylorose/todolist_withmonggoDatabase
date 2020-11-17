const express = require('express');
const router = express.Router();

const {
    getTasks,
    addTask,
    getTaskById,
    deleteTask,
    updateTaskById,
} = require('../controllers/taskContoller');

router.get('/tasks', getTasks);
router.get('/tasks/:id', getTaskById);
router.post('/', addTask);
router.post('/update/:id', updateTaskById);
router.post('/:id', deleteTask);
module.exports = router;