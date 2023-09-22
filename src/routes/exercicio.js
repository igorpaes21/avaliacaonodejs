

const express = require('express')
const ControllerExercicio = require('../controllers/exercicio')

const controller = new ControllerExercicio()
const router = express.Router()

router.post('/api/ex1', controller.Somar)

module.exports = router

router.post('/api/ex2', controller.Subtrair)

module.exports = router

router.post('/api/ex3', controller.Multiplicar)

module.exports = router

router.post('/api/ex4', controller.Dividir)

module.exports = router