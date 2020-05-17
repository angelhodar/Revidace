<template>
  <q-page>
    <div class="q-pa-md">
      <div class="row">
        <Exercise
          v-for="exercise in exercises"
          :key="exercise.name"
          v-bind="exercise"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import Exercise from 'components/Exercise'

export default {
  components: {
    Exercise
  },

  data() {
    return {
      exercises: [
        {
          name: "Cubos",
          category: "Reflejos",
          description: "Se presentan unos cubos con tiempos de aparición aleatorios donde el paciente debe reaccionar con el mando adecuado para hacerlos desaparecer.",
          thumbnail: "cubos.jpg",
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
        },
        {
          name: "Matcher",
          category: "Reflejos",
          description: "El paciente debe usar el joystick del mando correspondiente para destruir ciertos objetos en el momento adecuado.",
          thumbnail: "matcher.png",
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
        }
      ]
    }
  }
}
</script>
