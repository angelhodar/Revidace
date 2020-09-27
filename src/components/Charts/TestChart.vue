<template>
  <div class="q-pa-md">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Cubes Reaction Time</div>
      </q-card-section>
      <q-card-section>
        <BarChart :chart-data="data" :options="options" />
        <PieChart :chart-data="data" />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  components: {
    BarChart: () => import("./BarChart"),
    PieChart: () => import("./PieChart")
  },
  props: {
    taskData: Object
  },
  data () {
    return {
      data: {},
      options: {}
    }
  },
  mounted () {
    this.fillData()
  },
  methods: {
    fillData () {
      this.data = {
        labels: ["Left Cube", "Right Cube"],
        datasets: [
          {
            data: [
              this.taskData.leftCube.totalReactions,
              this.taskData.rightCube.totalReactions
            ],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)"
            ],
            borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
            borderWidth: 1
          }
        ]
      }
      this.options = {
        legend: {
          display: false
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    }
  }
}
</script>
