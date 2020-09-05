<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="q-pa-md">
      <q-card-section>
        <div class="row">
          <q-icon name="assignment" size="md" />
          <div class="text-h5 q-pl-md">Exercise Launcher</div>
        </div>
      </q-card-section>

      <q-card-section class="q-gutter-md">
        <q-select outlined v-model="patient" :options="patients.map(p => p.name)" label="Patient">
          <template v-slot:prepend>
            <q-icon name="person" />
          </template>
        </q-select>
        <q-select
          outlined
          v-model="exercise"
          :options="exercises.map(e => e.name)"
          label="Exercise"
        >
          <template v-slot:prepend>
            <q-icon name="category" />
          </template>
        </q-select>
        <q-select outlined v-model="profile" :options="profiles" label="Profile">
          <template v-slot:prepend>
            <q-icon name="settings" />
          </template>
        </q-select>
      </q-card-section>
      <q-card-actions align="around">
        <q-btn outline color="primary" label="Launch" @click="onLaunch" />
        <q-btn outline color="red" label="Cancel" @click="hide" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { Exercises, Patients } from "../services"

export default {
  name: "ExerciseLauncher",
  props: {
    device: Object
  },
  data () {
    return {
      exercises: [],
      patients: [],
      patient: "",
      exercise: "",
      profile: "Easy",
      profiles: ["Easy", "Medium", "Hard"]
    }
  },
  async mounted () {
    const { data: exercises } = await Exercises.getExercises({
      fields: ["name"]
    })
    const { data: patients } = await Patients.getPatients()
    this.exercises = exercises
    this.exercise = exercises[0].name
    this.patients = patients
    this.patient = patients[0].name
  },
  methods: {
    show () {
      this.$refs.dialog.show()
    },
    hide () {
      this.$refs.dialog.hide()
    },
    onDialogHide () {
      this.$emit("hide")
    },
    onLaunch () {
      const selectedExercise = this.exercises.find(
        (e) => e.name === this.exercise
      )
      const selectedPatient = this.patients.find(
        (p) => p.name === this.patient
      )
      this.$emit("ok", {
        device: this.device.id,
        exercise: selectedExercise.id,
        patient: selectedPatient.id,
        profile: this.profile.toLowerCase()
      })
      this.hide()
    }
  }
}
</script>
