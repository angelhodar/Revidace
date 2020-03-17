const express = require('express')
// TODO: Add schema inheritance from an abstract Exercise schema
const Cube = require('../models/cube')
const Matcher = require('../models/matcher')
const IceCreamShop = require('../models/iceshop')
const router = express.Router()

// toObject necesario para no extraer metadatos innecesarios de un schema en el html

cube = new Cube({
  name: "Cubos",
  description: "Se presentan unos cubos con tiempos de aparición aleatorios donde el paciente debe reaccionar con el mando adecuado para hacerlos desaparecer.",
  img: "cubos.jpg",
  parameters: {
    cantidad: 2,
    reaparicion: 2,
    duracion: 40
  }
}).toObject()

matcher = new Matcher({
  name: "Matcher",
  description: "El paciente debe usar el joystick del mando correspondiente para destruir ciertos objetos en el momento adecuado.",
  img: "matcher.png",
  parameters: {
    velocidad: 2,
    reaparicion: 3,
    duracion: 40
  }
}).toObject()

iceCreamShop = new IceCreamShop({
  name: "Heladeria",
  description: "Simulación de una heladería en la que el paciente deberá atender a un conjunto de clientes sirviendo helados.",
  img: "heladeria.jpg",
  parameters: {
    sabores: 6,
    clientes: 1,
    duracion: 60
  }
}).toObject()

exercises = [
  cube,
  matcher,
  iceCreamShop
]

router.get('/', (req, res) => {
  res.render('exercises', {exercises: exercises})
})

module.exports = router