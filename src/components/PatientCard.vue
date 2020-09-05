<template>
  <div class="q-pa-md col-md-3 col-xs-12">
    <q-card class="patient-card">
      <q-img src="https://picsum.photos/400/200" basic>
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
