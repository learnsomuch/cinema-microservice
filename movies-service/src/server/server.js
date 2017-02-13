const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
<<<<<<< HEAD
const spdy = require('spdy')
=======
>>>>>>> step-4
const api = require('../api/movies')

const start = (options) => {
  return new Promise((resolve, reject) => {
    if (!options.repo) {
      reject(new Error('The server must be started with a connected repository'))
    }
    if (!options.port) {
      reject(new Error('The server must be started with an available port'))
    }

    const app = express()
    app.use(morgan('dev'))
    app.use(helmet())
    app.use((err, req, res, next) => {
      reject(new Error('Something went wrong!, err:' + err))
      res.status(500).send('Something went wrong!')
    })

    api(app, options)

<<<<<<< HEAD
    if (process.env.NODE === 'test') {
      const server = app.listen(options.port, () => resolve(server))
    } else {
      const server = spdy.createServer(options.ssl, app)
        .listen(options.port, () => resolve(server))
    }
=======
    const server = app.listen(options.port, () => resolve(server))
>>>>>>> step-4
  })
}

module.exports = Object.assign({}, {start})
