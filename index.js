const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')

const projectsRouter = require('./projects/router')
const tasksRouter = require('./tasks/router')
const resourcesRouter = require('./resources/router')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(helmet())
app.use(morgan('dev'))

app.use('/api/projects', projectsRouter)
app.use('/api/tasks', tasksRouter)
app.use('/api/resources', resourcesRouter)

app.get('/', (_, res) => {
  // TODO - show API documentation?
  res.status(200).send('<h1>Hey</h1>')
})

app.all('*', (_, res) => {
  // TODO - Better 404 msg
  res.status(404).send('<h1>404 - Resource not found on this server</h1>')
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
