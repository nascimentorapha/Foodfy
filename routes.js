const express = require('express')
const routes = express.Router()
const dados = require("./public/data.json")
const recipes = require('./public/controllers/admin.js')


routes.get("/", function(req, res){
    return res.render("index", { content: dados.recipes })
})

routes.get('/recipe', function(req, res){
    return res.render("recipe", { recipe: dados.recipes })
})

routes.get("/recipe/:index", function (req, res) {
    const recipeIndex = req.params.index;
    const recipe = dados.recipes[recipeIndex]; //Array de receitas carregado data.json

    return res.render("full-recipe", { recipe })
})

routes.get("/about", function(req, res){
    return res.render("about")
})

routes.get("/admin/recipes", recipes.index)
routes.get("/admin/recipes/create", recipes.create)
routes.get("/admin/recipes/:id", recipes.show)
routes.get("/admin/recipes/:id/edit", recipes.edit)

routes.post("/admin/recipes", recipes.post)
routes.put("/admin/recipes", recipes.put)
routes.delete("/admin/recipes", recipes.delete)

module.exports = routes