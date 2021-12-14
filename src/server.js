const express = require('express')
const cors = require('cors')
const uuid = require('uuid').v4

const app = express()
app.use(express.json())
app.use(cors())

let tasks = [
  {
    id: uuid(),
    author: 'Manager ABC',
    description: "Migrate to a new database",
    priorityLevel: "high",
    engineerType: "backend"
  },
  {
    id: uuid(),
    author: 'Manager XYZ',
    description: "Refactor frontend",
    priorityLevel: "low",
    engineerType: "frontend"
  }
]

function getAllTasks(req, res) {
  res.json(tasks)
}

function getTaskById(req, res) {
  res.json(tasks.find(task => task.id === req.params.id))
}

function postNewTask(req, res) {
  const task = { ...req.body, id: uuid() }
  tasks.push(task)
  res.json(task)
}

function deleteTaskById(req, res) {
  tasks = tasks.filter(task => task.id !== req.params.id)
  res.json(req.params.id)
}

function replaceTaskById(req, res) {
  const { id } = req.params
  const updatedTask = { ...req.body, id }
  tasks = tasks.map(q => {
    if (q.id === id) {
      return updatedTask
    }
    return q
  })
  res.json(updatedTask)
}

////////////// ENDPOINTS //////////////

app.get('/api/tasks', getAllTasks)
app.get('/api/tasks/:id', getTaskById)
app.post('/api/tasks', postNewTask)
app.delete('/api/tasks/:id', deleteTaskById)
app.put('/api/tasks/:id', replaceTaskById)

app.listen(5000, () => console.log(
    'Task server listening on port 5000!',
));
