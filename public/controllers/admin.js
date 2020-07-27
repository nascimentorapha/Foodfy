const fs = require('fs') //filesystem
const Intl = require('intl')
const data = require('../data.json')
const { resolveNaptr } = require('dns')

exports.index = function(req, res) {
    return res.render('admin/index', {content: data.recipes})
}

exports.create = function (req, res) {
    return res.render('admin/create')
}

exports.show = function(req, res) {
    return res.render('admin/details')
}

exports.edit = function(req, res) {
    return res.render('admin/edit')
}

exports.post = function(req, res){
    
}

exports.put = function(req, res){

}

exports.delete = function(req, res){

}