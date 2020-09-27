<template>
  <q-page class="q-pa-md">
    <BreadCrumbs :breadcrumbs="breadcrumbs" />
    <div class="row">
      <PatientCard v-for="patient in patients" :key="patient.id" :patient="patient" />
    </div>
  </q-page>
</template>

<script>
import { mapState, mapActions } from "vuex"

export default {
  components: {
    PatientCard: () => import("components/Patients/PatientCard"),
    BreadCrumbs: () => import("components/Dashboard/BreadCrumbs")
  },
  data () {
    return {
      breadcrumbs: [
        {
          label: "Patients",
          icon: "people"
        }
      ]
    }
  },
  async mounted () {
    await this.getPatients()
  },
  computed: {
    ...mapState("patients", ["patients"])
  },
  methods: {
    ...mapActions("patients", ["getPatients"])
  }
}
</script>
