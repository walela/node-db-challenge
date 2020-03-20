const express = require('express')
const db = require('./model')

const router = express.Router()

router.get('/', (req, res) => {
  db.getAll()
    .then(resources => {
      res.status(200).json(resources)
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: 'Failed to get resources' })
    })
})

router.post('/', (req, res) => {
  db.insert(req.body)
    .then(id => {
      res.status(201).json(`A new resource with an id of ${id} was created`)
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: 'Failed to create resource' })
    })
})

module.exports = router
