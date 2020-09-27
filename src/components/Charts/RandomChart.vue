<template>
  <div class="q-pa-md">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Random Chart</div>
        <div class="text-subtitle2">Testing</div>
      </q-card-section>
      <q-card-section>
        <LineChart :chart-data="datacollection" />
      </q-card-section>
      <q-card-actions>
        <q-btn outline color="primary" @click="fillData" label="Randomize" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  components: {
    LineChart: () => import("./LineChart")
  },
  data () {
    return {
      datacollection: null
    }
  },
  mounted () {
    this.fillData()
  },
  methods: {
    fillData () {
      this.datacollection = {
        labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [this.getRandomInt(), this.getRandomInt()]
          }, {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [this.getRandomInt(), this.getRandomInt()]
          }
        ]
      }
    },
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  }
}
</script>
