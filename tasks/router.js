const express = require('express')
const db = require('./model')

const router = express.Router()

router.get('/', (req, res) => {
  db.getAll()
    .then(tasks => {
      res.status(200).json(tasks)
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: 'Error. Failed to get tasks' })
    })
})

router.post('/', (req, res) => {
  db.insert(req.body)
    .then(id => {
      res.json(`A new task with an id of ${id} was created`)
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: 'Failed to create task' })
    })
})

module.exports = router
