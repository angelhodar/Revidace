<template>
  <q-page class="q-pa-md">
    <q-table title="Users" :data="data" :columns="columns" row-key="id" :loading="loading">
      <template v-slot:body-cell-provider="props">
        <q-td :props="props">
          <div>
            <q-icon v-if="props.row.provider === 'local'" name="email" color="teal" size="sm" />
            <q-icon
              v-if="props.row.provider === 'google'"
              name="fab fa-google"
              color="orange"
              size="sm"
            />
            <q-icon
              v-if="props.row.provider === 'facebook'"
              name="fab fa-facebook"
              color="blue-10"
              size="sm"
            />
          </div>
        </q-td>
      </template>
      <template v-slot:body-cell-role="props">
        <q-td :props="props">
          <div>
            <q-btn-toggle
              v-model="props.row.role"
              size="md"
              no-caps
              flat
              toggle-color="primary"
              :options="[
                  {label: 'User', value: 'user'},
                  {label: 'Manager', value: 'manager'},
                  {label: 'Admin', value: 'admin'}
                ]"
            />
          </div>
        </q-td>
      </template>
      <template v-slot:body-cell-blocked="props">
        <q-td :props="props">
          <div>
            <q-toggle v-model="props.row.blocked" />
          </div>
        </q-td>
      </template>
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn icon="edit" color="blue-8" flat dense />
          <q-btn icon="delete" color="red" class="q-ml-sm" flat dense />
        </q-td>
      </template>
      <template v-slot:loading>
        <q-inner-loading showing color="primary" />
      </template>
      <template v-slot:top-right>
        <q-btn
          color="primary"
          icon-right="archive"
          label="Export CSV"
          no-caps
          @click="exportTable"
        />
      </template>
    </q-table>
  </q-page>
</template>

<script>
import { date } from "quasar"
import { Users } from "../services"

export default {
  name: "UsersManagment",
  data () {
    return {
      loading: false,
      columns: [
        { name: "email", label: "Email", field: "email", align: "center" },
        { name: "provider", label: "Provider", field: "provider", align: "center" },
        { name: "name", label: "Name", field: "displayName", align: "center" },
        { name: "role", label: "Role", field: "role", align: "center", format: val => val.charAt(0).toUpperCase() + val.slice(1) },
        { name: "createdAt", label: "Created", field: "createdAt", align: "center", format: val => date.formatDate(val, "HH:mm:ss DD-MM-YYYY") },
        { name: "lastSignInTime", label: "Last Connection", field: "lastSignInTime", align: "center", format: val => date.formatDate(val, "HH:mm:ss DD-MM-YYYY") },
        { name: "blocked", label: "Blocked", field: "blocked", align: "center" },
        { name: "actions", label: "", field: "actions", align: "center" }
      ],
      data: []
    }
  },
  async mounted () {
    this.loading = true
    try {
      const { data } = await Users.getUsers()
      this.data = data
    } catch (err) {
      console.log(err)
    } finally {
      this.loading = false
    }
  },
  methods: {
    exportTable () {
      console.log("Exporting...")
    }
  }
}
</script>
