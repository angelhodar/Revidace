<template>
  <div>
    <q-tabs v-model="tab" active-color="primary" indicator-color="primary" narrow-indicator>
      <q-tab name="easy" label="Facil" />
      <q-tab name="medium" label="Medio" />
      <q-tab name="hard" label="Dificil" />
    </q-tabs>
    <q-tab-panels v-model="tab" animated>
      <q-tab-panel v-for="profile in profiles" :key="profile" :name="profile">
        <ExerciseParameters :exercise="exercise" :profile="profile" />
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex"

export default {
  name: "ExerciseProfiles",
  props: {
    exerciseProp: Object
  },
  components: {
    ExerciseParameters: () => import("./ExerciseParameters")
  },
  data () {
    return {
      exercise: null,
      tab: "easy",
      profiles: [
        "easy",
        "medium",
        "hard"
      ]
    }
  },
  async mounted () {
    if (this.exerciseProp != null) {
      this.exercise = this.exerciseProp
    } else {
      await this.getExercises()
      this.exercise = this.exercises[0]
    }
  },
  computed: {
    ...mapState("exercises", ["exercises"])
  },
  methods: {
    ...mapActions("exercises", ["getExercises"])
  }
}
</script>
