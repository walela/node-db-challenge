const express = require('express')
const db = require('./model')

const router = express.Router()

router.get('/', (_, res) => {
  db.getAll()
    .then(projects => {
      res.status(200).json(projects)
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: 'Error. Failed to get projects' })
    })
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  db.getById(id)
    .then(project => {
      res.status(200).json(project)
    })
    .catch(err => {
      console.error(err)
      res
        .status(500)
        .json({ message: `Error. Failed to get project with id ${id}` })
    })
})

router.post('/', (req, res) => {
  db.insert(req.body)
    // destructure something like [ 2 ]. nice
    .then(([id]) => {
      console.log(id)
      db.getById(id).then(project => {
        res.status(201).json(project[0])
      })
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: 'Error. Failed to create project' })
    })
})

module.exports = router
