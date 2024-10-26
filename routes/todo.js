const express = require('express');
const router = express.Router();

let todos = [
    {
    id : 1, task : "Belajar Node.JS", completed : false
    },
    {
    id : 2, task : "Membuat API", completed : false
    },
    {
        id: 2, 
        task: "Membuat API", 
        completed: false,
        priority: "Medium",
        dueDate: "2024-12-05" 
    },
];


// Endpoint untuk mendapatkan data todos 
router.get('/', (req, res) => {res.json(todos); });

router.post('/', (req, res) => {
    const newTodo = {
        id: todos.length + 1,
        task: req.body.task,
        completed: false,
        priority: req.body.priority || "Low", 
        dueDate: req.body.dueDate || null    
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
})

router.get('/new-object', (req, res) => {
    res.json(newObject);
});

module.exports = router;