<template>
  <q-page class="q-pa-md">
    <div class="row">
      <ExerciseCard v-for="exercise in exercises" :key="exercise.name" :exercise="exercise" />
    </div>
  </q-page>
</template>

<script>
export default {
  components: {
    ExerciseCard: () => import("components/ExerciseCard")
  },
  data () {
    return {
      exercises: []
    }
  },
  mounted () {
    this.getExercises()
  },
  methods: {
    async getExercises () {
      try {
        this.$q.loading.show({ message: "Loading exercises..." })
        const res = await this.$api.get("/exercises")
        this.exercises = res.data
      } catch (err) {
        console.log(err)
      } finally {
        this.$q.loading.hide()
      }
    }
  }
}
</script>

<style>
</style>
