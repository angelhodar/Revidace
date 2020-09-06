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
        <q-select
          outlined
          v-model="patient"
          :options="patients"
          option-label="name"
          label="Patient"
        >
          <template v-slot:prepend>
            <q-icon name="person" />
          </template>
        </q-select>
        <q-select
          outlined
          v-model="exercise"
          :options="exercises"
          option-label="name"
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
        <q-btn
          outline
          color="primary"
          label="Launch"
          :disabled="exercise == null || patient == null"
          @click="onLaunch"
        />
        <q-btn outline color="red" label="Cancel" @click="hide" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: "ExerciseLauncher",
  props: {
    device: Object,
    exercises: Array,
    patients: Array
  },
  data () {
    return {
      patient: null,
      exercise: null,
      profile: "Easy",
      profiles: ["Easy", "Medium", "Hard"]
    }
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
      this.$emit("ok", {
        device: {
          id: this.device.id,
          socket: this.device.socket
        },
        exercise: {
          id: this.exercise.id,
          name: this.exercise.name
        },
        patient: this.patient.id,
        profile: this.profile.toLowerCase()
      })
      this.hide()
    }
  }
}
</script>
