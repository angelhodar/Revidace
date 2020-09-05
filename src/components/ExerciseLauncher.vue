<template>
  <q-dialog ref="dialog" @hide="onHide">
    <q-card class="q-pa-md">
      <q-card-section>
        <div class="text-h4 text-center">Exercise Launcher</div>
      </q-card-section>

      <q-card-section class="q-gutter-md">
        <q-select outlined v-model="patient" :options="patients.map(p => p.name)" label="Patient" />
        <q-select
          outlined
          v-model="exercise"
          :options="exercises.map(e => e.name)"
          label="Exercise"
        />
        <q-select outlined v-model="profile" :options="profiles" label="Profile" />
      </q-card-section>
      <q-card-actions>
        <q-btn outline color="primary" label="Launch!" @click="launch" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { mapActions } from "vuex"
import { Exercises, Patients } from "../services"

export default {
  name: "ExerciseLauncher",
  props: {
    device: Object
  },
  data () {
    return {
      shown: false,
      exercises: [],
      patients: [],
      patient: "",
      exercise: "",
      profile: "Easy",
      profiles: ["Easy", "Medium", "Hard"]
    }
  },
  async mounted () {
    const { data: exercises } = await Exercises.getExercises({ fields: ["name"] })
    const { data: patients } = await Patients.getPatients()
    this.exercises = exercises
    this.exercise = exercises[0].name
    this.patients = patients
    this.patient = patients[0].name
  },
  methods: {
    ...mapActions("sockets", ["launchExercise"]),
    launch () {
      const selectedExercise = this.exercises.find(e => e.name === this.exercise)
      const selectedPatient = this.patients.find(p => p.name === this.patient)
      this.launchExercise({
        device: this.device.id,
        exercise: selectedExercise.id,
        patient: selectedPatient.id,
        profile: this.profile.toLowerCase()
      })
      this.$refs.dialog.hide()
    },
    onHide () {
      this.$emit("hide")
    }
  },
  watch: {
    device: function (val) {
      if (val != null) this.$refs.dialog.show()
    }
  }
}
</script>
