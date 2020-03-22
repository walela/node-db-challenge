const db = require('../data/db-config.js')

const getAll = () => {
  return db('resources')
}

const insert = resource => {
  return db('resources').insert(resource)
}

module.exports = {
  getAll,
  insert
}
