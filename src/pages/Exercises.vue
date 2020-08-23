<template>
  <q-page class="q-pa-md">
    <div class="row">
      <ExerciseCard v-for="exercise in exercises" :key="exercise.name" :exercise="exercise" />
    </div>
  </q-page>
</template>

<script>
import { Exercises } from "../services"

export default {
  components: {
    ExerciseCard: () => import("components/Exercises/ExerciseCard")
  },
  data () {
    return {
      exercises: []
    }
  },
  async mounted () {
    const { data } = await Exercises.getExercises()
    this.exercises = data
  }
}
</script>

<style>
</style>
