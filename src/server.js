const express = require('express')
const server = express()

require('./database')

server.use(express.static('public'))
server.use(express.urlencoded({ extended: true}))
server.use(require('./routes'))

//config template engine
const nunjucks = require('nunjucks')
nunjucks.configure(__dirname+"/views", {
    express: server,
    noCache: true,
})



server.listen(8000, () => console.log('server running on port 8000'))