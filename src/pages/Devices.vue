<template>
  <q-page class="q-pa-md">
    <BreadCrumbs label="Devices" icon="contactless" />
    <div class="row">
      <DeviceCard
        v-for="device in devices"
        :key="device.id"
        :device="device"
        @onSelected="deviceSelected"
      />
    </div>
  </q-page>
</template>

<script>
import TaskLauncher from "components/TaskLauncher"
import { mapState, mapActions } from "vuex"

export default {
  components: {
    DeviceCard: () => import("components/DeviceCard"),
    BreadCrumbs: () => import("components/Dashboard/BreadCrumbs")
  },
  async mounted () {
    await this.getDevices()
    await this.getExercises()
    await this.getPatients()
  },
  computed: {
    ...mapState("users", ["user"]),
    ...mapState("devices", ["devices"]),
    ...mapState("exercises", ["exercises"]),
    ...mapState("patients", ["patients"])
  },
  methods: {
    ...mapActions("tasks", ["launchTask"]),
    ...mapActions("devices", ["getDevices"]),
    ...mapActions("exercises", ["getExercises"]),
    ...mapActions("patients", ["getPatients"]),
    deviceSelected (device) {
      this.$q.dialog({
        component: TaskLauncher,
        parent: this,
        device: device,
        exercises: this.exercises,
        patients: this.patients
      }).onOk((data) => {
        this.launchTask({ user: this.user.id, ...data })
      })
    }
  }
}
</script>
