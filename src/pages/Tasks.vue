<template>
  <q-page class="q-pa-md">
    <BreadCrumbs label="Tasks" icon="assignment" />
    <q-table
      title="Tasks"
      row-key="id"
      :data="tasks"
      :columns="columns"
      :filter="filter"
      :pagination="{rowsPerPage: 15}"
      :loading="loading"
    >
      <template v-slot:top>
        <q-btn
          outline
          class="q-ml-sm"
          color="primary"
          icon="insert_drive_file"
          label="Export CSV"
          :disable="loading"
          no-caps
          @click="exportTable"
        />
        <q-space />
        <q-input rounded outlined dense debounce="300" color="primary" v-model="filter">
          <template v-slot:append>
            <q-icon name="person_search" />
          </template>
        </q-input>
      </template>
      <template v-slot:body-cell-status="props">
        <q-td :props="props">
          <div>
            <q-badge v-if="props.row.status === 'active'" color="orange" :label="props.row.status" />
            <q-badge
              v-if="props.row.status === 'completed'"
              color="green"
              :label="props.row.status"
            />
            <q-badge v-if="props.row.status === 'failed'" color="red" :label="props.row.status" />
          </div>
        </q-td>
      </template>
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn
            icon="assignment"
            color="primary"
            :label="$q.screen.gt.md ? 'Details' : ''"
            outline
            no-caps
            @click="showTaskDetails(props.row)"
          />
          <q-btn
            icon="delete"
            color="red"
            class="q-ml-sm"
            :label="$q.screen.gt.md ? 'Delete' : ''"
            outline
            no-caps
            @click="removeTask(props.row)"
          />
        </q-td>
      </template>
      <template v-slot:loading>
        <q-inner-loading showing color="primary" />
      </template>
    </q-table>
  </q-page>
</template>

<script>
import { date, format } from "quasar"
import { mapState, mapActions } from "vuex"
const { capitalize } = format

export default {
  name: "Tasks",
  components: {
    BreadCrumbs: () => import("components/Dashboard/BreadCrumbs")
  },
  data () {
    return {
      loading: false,
      filter: "",
      columns: [
        {
          name: "patient",
          label: "Patient",
          field: (row) => row.patient.name,
          align: "center"
        },
        {
          name: "user",
          label: "User",
          field: (row) => row.user.displayName,
          align: "center"
        },
        {
          name: "device",
          label: "Device",
          field: (row) => row.device.name,
          align: "center"
        },
        {
          name: "exercise",
          label: "Exercise",
          field: (row) => row.exercise.name,
          align: "center"
        },
        {
          name: "profile",
          label: "Profile",
          field: "profile",
          align: "center",
          format: (val) => capitalize(val)
        },
        {
          name: "status",
          label: "Status",
          field: "status",
          align: "center",
          format: (val) => capitalize(val)
        },
        {
          name: "createdAt",
          label: "Created",
          field: "createdAt",
          align: "center",
          format: (val) => date.formatDate(val, "HH:mm:ss DD-MM-YYYY")
        },
        { name: "actions", label: "", field: "actions", align: "center" }
      ]
    }
  },
  async mounted () {
    this.loading = true
    await this.getTasks({
      populate: ["patient", "user", "device", "exercise"],
      fields: [
        "patient.name",
        "user.displayName",
        "device.name",
        "exercise.name"
      ]
    })
    this.loading = false
  },
  computed: {
    ...mapState("tasks", ["tasks"])
  },
  methods: {
    ...mapActions("tasks", ["getTasks"]),
    exportTable () {
      console.log("Exporting...")
    },
    showTaskDetails (task) {
      console.log("Showing tasks...")
    },
    removeTask (task) {
      console.log("Removing tasks...")
    }
  }
}
</script>
