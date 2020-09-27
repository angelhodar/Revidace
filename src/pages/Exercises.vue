<template>
  <q-page class="q-pa-md">
    <BreadCrumbs :breadcrumbs="breadcrumbs" />
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
import { mapState, mapActions } from "vuex"
import ExerciseDetails from "components/Exercises/ExerciseDetails"

export default {
  components: {
    ExerciseCard: () => import("components/Exercises/ExerciseCard"),
    BreadCrumbs: () => import("components/Dashboard/BreadCrumbs")
  },
  data () {
    return {
      breadcrumbs: [
        {
          label: "Exercises",
          icon: "create"
        }
      ]
    }
  },
  async mounted () {
    await this.getExercises()
  },
  computed: {
    ...mapState("exercises", ["exercises"])
  },
  methods: {
    ...mapActions("exercises", ["getExercises"]),
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
