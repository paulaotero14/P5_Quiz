var express = require('express');
const Sequelize = require('sequelize');
const {models} = require("../models/index.js");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/credits', function(req, res, next) {
  res.render('credits', { title: 'Credits' });
});

router.get('/quizzes', (req, res, next) => {
  aux = ""
  response = ""
  n = 0
  models.quiz.findAll()
    .each(quiz => {
      aux = `Pregunta Número ${quiz.id}: ${quiz.question}`
      aux = aux.concat(aux)
      response = JSON.stringify(aux)
      
  })
  .then((response, n) => {
  
    response = JSON.stringify(response)
    
    console.log("Dentro de then(response) => "+response)
  
    res.send('<!DOCTYPE html>'
      +'<html>'
      +'<head>'
      +    '<title>Quizzes</title>'
      +     '<link rel="stylesheet" href="/stylesheets/style.css" />'
      + '</head>'
      + '<body>'
      
      +         response
      + '</body>'
      + '</html>'
            )
  })
 
 
 })


module.exports = router;
