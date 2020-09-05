<template>
  <q-page class="q-pa-md">
    <BreadCrumbs label="Patients" icon="people" />
    <div class="row">
      <PatientCard v-for="patient in patients" :key="patient.id" :patient="patient" />
    </div>
  </q-page>
</template>

<script>
import { Patients } from "../services"

export default {
  components: {
    PatientCard: () => import("components/PatientCard"),
    BreadCrumbs: () => import("components/Dashboard/BreadCrumbs")
  },
  data () {
    return {
      patients: []
    }
  },
  async mounted () {
    const { data } = await Patients.getPatients()
    this.patients = data
  }
}
</script>
