const db = require('../data/db-config')

const getAll = () => {
  return db('projects')
}

const getById = id => {
  return db('projects').where({ id })
}

const insert = project => {
  return db('projects').insert(project)
}

module.exports = { getAll, getById, insert }
