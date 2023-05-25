const userRoutes = require('./routes/users')
const express = require('express')
const exphbs = require('express-handlebars')

const server = express()

// Middleware
// Create an instance of express-handlebars with partials
const hbs = exphbs.create({
  extname: 'hbs',
  defaultLayout: 'main',
  layoutsDir: __dirname + '/views/layouts/',
  partialsDir: __dirname + '/views/partials/',
})

server.engine('hbs', hbs.engine)
server.set('view engine', 'hbs')
server.set('views', __dirname + '/views')
server.use(express.urlencoded({ extended: true }))
server.use(express.static('public'))

// Routes
server.use('/', userRoutes)
server.use('/customize', userRoutes)
server.use('/checkout', userRoutes)

module.exports = server
