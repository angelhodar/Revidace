const db = require('./db_connector')
const Exercise = require('../models/exercise')

function addDurationParam(exercises){
  for(i=0; i < exercises.length; i++){
      exercises[i].parameters.set("duration", {
          name: "Duración",
          description: "Duración del ejercicio en segundos"
        });
  }
}

exercises = [
  cube = new Exercise({
    name: "Cubos",
    description: "Se presentan unos cubos con tiempos de aparición aleatorios donde el paciente debe reaccionar con el mando adecuado para hacerlos desaparecer.",
    img: "/images/exercises/cubos.jpg",
    parameters: {
      amount: {
        name: "Cantidad",
        description: "Número de cubos a mostrar"
      },
      respawn: {
        name: "Reaparición",
        description: "Tiempo de reaparición de los cubos"
      }
    },
    profiles: {
      easy: {
        amount: 2,
        respawn: 4,
        duration: 30
      },
      medium: {
        amount: 4,
        respawn: 3,
        duration: 60,
      },
      hard: {
        amount: 6,
        respawn: 2,
        duration: 120
      }
    }
  }),
  matcher = new Exercise({
    name: "Matcher",
    description: "El paciente debe usar el joystick del mando correspondiente para destruir ciertos objetos en el momento adecuado.",
    img: "/images/exercises/matcher.png",
    parameters: {
      speed: {
        name: "Velocidad",
        description: "Velocidad a la que los patrones se acercan al paciente"
      },
      respawn: {
        name: "Reaparición",
        description: "Tiempo de reaparición de los cubos"
      }
    },
    profiles: {
      easy: {
        speed: 2,
        respawn: 4,
        duration: 30
      },
      medium: {
        speed: 4,
        respawn: 3,
        duration: 60,
      },
      hard: {
        speed: 6,
        respawn: 2,
        duration: 120
      }
    }
  }),
  iceCreamShop = new Exercise({
    name: "Heladeria",
    description: "Simulación de una heladería en la que el paciente deberá atender a un conjunto de clientes sirviendo helados.",
    img: "/images/exercises/heladeria.jpg",
    parameters: {
      flavors: {
        name: "Sabores",
        description: "Número de sabores de helado disponibles"
      },
      clients: {
        name: "Clientes",
        description: "Número de clientes simultáneos a los que atender"
      }
    },
    profiles: {
      easy: {
        flavors: 4,
        clients: 1,
        duration: 30
      },
      medium: {
        flavors: 6,
        clients: 2,
        duration: 60,
      },
      hard: {
        flavors: 8,
        clients: 3,
        duration: 120
      }
    }
  }),
  sandwich = new Exercise({
    name: "Sandwich",
    description: "Creación de diferentes sandwiches con número de ingredientes y pisos variable.",
    img: "/images/exercises/sandwich.jpg",
    parameters: {
      ingredients: {
        name: "Ingredientes",
        description: "Número de ingredientes totales"
      },
      floors: {
        name: "Pisos",
        description: "Numero de pisos de sandwich necesarios"
      }
    },
    profiles: {
      easy: {
        ingredients: 4,
        floors: 2,
        duration: 30
      },
      medium: {
        ingredients: 6,
        floors: 3,
        duration: 60,
      },
      hard: {
        ingredients: 8,
        floors: 4,
        duration: 120
      }
    }
  }),
  clasification = new Exercise({
    name: "Clasificación",
    description: "Clasificar palabras en distintas temáticas según la palabra concreta",
    img: "/images/exercises/voronoi.png",
    parameters: {
      subjects: {
        name: "Asignaturas",
        description: "Número de las distintas temáticas en las que discriminar"
      },
      words: {
        name: "Palabras",
        description: "Cantidad de palabras a discriminar"
      },
      colored: {
        name: "Colorear",
        description: "Si se quiere especificar un color único a cada temática"
      }
    },
    profiles: {
      easy: {
        subjects: 4,
        words: 10,
        colored: false,
        duration: 30
      },
      medium: {
        subjects: 6,
        words: 20,
        colored: false,
        duration: 60,
      },
      hard: {
        subjects: 8,
        words: 30,
        colored: true,
        duration: 120
      }
    }
  }),
  recycle = new Exercise({
    name: "Reciclaje",
    description: "Reciclado de distintos objetos en sus cubos correspondientes",
    img: "/images/exercises/reciclaje.jpg",
    parameters: {
      materials: {
        name: "Materiales",
        description: "Número de distintos materiales a reciclar"
      },
      objects: {
        name: "Objetos",
        description: "Cantidad de objetos distintos a reciclar"
      }
    },
    profiles: {
      easy: {
        materials: 3,
        objects: 5,
        duration: 30
      },
      medium: {
        materials: 4,
        objects: 8,
        duration: 60,
      },
      hard: {
        materials: 5,
        objects: 12,
        duration: 120
      }
    }
  })
]

addDurationParam(exercises);

Exercise.deleteMany({}, function(error) {
  if (error) {
    console.log(error)
  } else {
    exercises.forEach(exercise => {
      exercise.save(function(error) {
        if (error) console.log(error)
      })
    })
  }
})

console.log("Finished")