const fs = require('fs') //filesystem
const Intl = require('intl')
const data = require('../data.json')
const { resolveNaptr } = require('dns')

exports.index = function(req, res) {
    return res.render('admin/index', {recipe: data.recipes})
}

exports.create = function (req, res) {

    
    return res.render('admin/create')
}

exports.show = function(req, res) {
    const { id } = req.params

    const foundRecipe = data.recipes.find(function(recipe){
        return recipe.id == id
    })

    if (!foundRecipe)
        return res.send("Recipe not found")
    
    const recipe ={
        ...foundRecipe, //coloca todos os campos do recipe
    }

    return res.render('admin/details', {recipe})
}

exports.edit = function(req, res) {
    const { id } = req.params

    const foundRecipe = data.recipes.find(function(recipe){
        return recipe.id == id
    })

    if (!foundRecipe)
        return res.send("Recipe not found")
    
    const recipe ={
        ...foundRecipe, //coloca todos os campos do recipe
    }

    return res.render('admin/edit', {recipe})
}

exports.post = function(req, res){
    
}

exports.put = function(req, res){

}

exports.delete = function(req, res){

}