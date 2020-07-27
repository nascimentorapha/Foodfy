const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const routes = require('./routes')

server.use(express.urlencoded({ extended:true}))
//Responsável por receber as informações
//do submit da página create.njk, o 
//comando "req.body"

server.use(express.static('public'))
server.use(express.static('content'))
server.use(routes)

server.set("view engine", "njk")


nunjucks.configure("views", {
    express:server,
    autoescape: false,
    noCache: true
})


server.listen(3000, function(){
    console.log('Server is running on port 3000')
})