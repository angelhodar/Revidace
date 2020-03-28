const db = require('./db')
const BaseExercise = require('./models/exercise')
const Cube = require('./models/cube')
const Matcher = require('./models/matcher')
const IceCreamShop = require('./models/iceshop')
const Sandwich = require('./models/sandwich')
const Clasification = require('./models/clasification')
const Recycle = require('./models/recycle')

cube = new Cube({
  name: "Cubos",
  description: "Se presentan unos cubos con tiempos de aparición aleatorios donde el paciente debe reaccionar con el mando adecuado para hacerlos desaparecer.",
  img: "images/exercises/cubos.jpg",
  parameters: {
    cantidad: 2,
    reaparicion: 2,
    duracion: 40
  }
})

matcher = new Matcher({
  name: "Matcher",
  description: "El paciente debe usar el joystick del mando correspondiente para destruir ciertos objetos en el momento adecuado.",
  img: "images/exercises/matcher.png",
  parameters: {
    velocidad: 2,
    reaparicion: 3,
    duracion: 40
  }
})

iceCreamShop = new IceCreamShop({
  name: "Heladeria",
  description: "Simulación de una heladería en la que el paciente deberá atender a un conjunto de clientes sirviendo helados.",
  img: "images/exercises/heladeria.jpg",
  parameters: {
    sabores: 6,
    clientes: 1,
    duracion: 60
  }
})

sandwich = new Sandwich({
  name: "Sandwich",
  description: "Creación de diferentes sandwiches con número de ingredientes y pisos variable.",
  img: "images/exercises/sandwich.jpg",
  parameters: {
    ingredientes: 6,
    pisos: 2,
    duracion: 60
  }
})

discriminator = new Clasification({
  name: "Clasificación",
  description: "Clasificar palabras en distintas temáticas según la palabra concreta",
  img: "images/exercises/voronoi.png",
  parameters: {
    ingredientes: 6,
    pisos: 2,
    duracion: 60
  }
})

recycle = new Recycle({
  name: "Reciclaje",
  description: "Reciclado de distintos objetos en sus cubos correspondientes",
  img: "images/exercises/reciclaje.jpg",
  parameters: {
    ingredientes: 6,
    pisos: 2,
    duracion: 60
  }
})

async function populate() {
  cube = await cube.save();
  matcher = await matcher.save();
  iceCreamShop = await iceCreamShop.save();
  sandwich = await sandwich.save();
  discriminator = await discriminator.save();
  recycle = await recycle.save();
}

BaseExercise.deleteMany({}, function(error){
  if (error)
    console.log(error)
  else
    console.log("Removed")
})

populate()

console.log("Finished")