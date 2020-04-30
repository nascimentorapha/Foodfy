const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const dados = require("./public/data")

server.use(express.static('public'))
server.use(express.static('content'))

server.set("view engine", "njk")


nunjucks.configure("views", {
    express:server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res){
    return res.render("index", { content: dados })
})

server.get('/recipe', function(req, res){
    return res.render("recipe", { content: dados })
})

server.get("/recipe/:index", function (req, res) {
    const recipeIndex = req.params.index;
    const recipe = dados[recipeIndex]; //Array de receitas carregado data.js

    return res.render("full-recipe", { recipe })
})

server.get("/about", function(req, res){
    return res.render("about")
})

server.listen(3000, function(){
    console.log('Server is running on port 3000')
})