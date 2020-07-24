const express = require('express')
const routes = express.Router()

routes.get("/", function(req, res){
    return res.render("index", { content: dados.recipes })
})

routes.get('/recipe', function(req, res){
    return res.render("recipe", { content: dados.recipes })
})

routes.get("/recipe/:index", function (req, res) {
    const recipeIndex = req.params.index;
    const recipe = dados.recipes[recipeIndex]; //Array de receitas carregado data.json

    return res.render("full-recipe", { recipe })
})

routes.get("/about", function(req, res){
    return res.render("about")
})


module.exports = routes