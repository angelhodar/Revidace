<template>
  <q-page class="q-pa-md">
    <BreadCrumbs label="Exercises" icon="create" />
    <div class="row">
      <ExerciseCard
        v-for="exercise in exercises"
        :key="exercise.name"
        :exercise="exercise"
        @showDetails="showExerciseModal"
      />
    </div>
  </q-page>
</template>

<script>
import { Exercises } from "../services"
import ExerciseDetails from "components/Exercises/ExerciseDetails"

export default {
  components: {
    ExerciseCard: () => import("components/Exercises/ExerciseCard"),
    BreadCrumbs: () => import("components/Dashboard/BreadCrumbs")
  },
  data () {
    return {
      exercises: []
    }
  },
  async mounted () {
    const { data } = await Exercises.getExercises()
    this.exercises = data
  },
  methods: {
    showExerciseModal (exercise) {
      this.$q.dialog({
        component: ExerciseDetails,
        parent: this,
        exercise: exercise
      })
    }
  }
}
</script>
