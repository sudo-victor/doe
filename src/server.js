require('dotenv').config()

const express = require('express')
const server = express()

require('./database')

server.use(express.static('public'))
server.use(express.urlencoded({ extended: true }))
server.use(require('./routes'))

//config template engine
const nunjucks = require('nunjucks')
nunjucks.configure(__dirname + "/views", {
    express: server,
    noCache: true,
})

const port = process.env.PORT


server.listen(port, () => console.log(`server running on port: ${port}`))