<template>
  <div class="q-pa-md col-md-4 col-lg-3 col-xs-12">
    <q-card class="patient-card">
      <q-img src="https://res.cloudinary.com/revidace/image/upload/q_auto,f_auto,w_400,h_250/samples/people/smiling-man.jpg">
        <div class="absolute-bottom text-subtitle2 text-center">{{ patient.name }}</div>
      </q-img>
    </q-card>
  </div>
</template>

<script>
export default {
  props: {
    patient: Object
  }
}
</script>
