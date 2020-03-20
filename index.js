const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(helmet())
app.use(morgan('dev'))

app.get('/', (_, res) => {
  res.status(200).send('<h1>Hey</h1>')
})

app.all('*', (_, res) => {
  res.status(404).send('<h1>404 - Resource not found on this server</h1>')
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
