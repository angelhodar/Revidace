<template>
  <q-page class="q-pa-md">
    <BreadCrumbs label="Users" icon="people" />

    <q-table
      title="Users"
      :data="data"
      :columns="columns"
      :filter="filter"
      row-key="id"
      :loading="loading"
    >
      <template v-slot:top>
        <div class="q-gutter-md">
          <q-btn
            outline
            color="primary"
            icon="person_add"
            :disable="loading"
            label="Add User"
            no-caps
            @click="addUser"
          />
          <q-btn
            outline
            color="primary"
            icon="archive"
            :disable="loading"
            label="Import"
            no-caps
            @click="importUsers"
          />
          <q-btn
            outline
            color="primary"
            icon="insert_drive_file"
            label="Export CSV"
            :disable="loading"
            no-caps
            @click="exportTable"
          />
        </div>
        <q-space />
        <q-input rounded outlined dense debounce="300" color="primary" v-model="filter">
          <template v-slot:append>
            <q-icon name="person_search" />
          </template>
        </q-input>
      </template>
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
      <template v-slot:body-cell-blocked="props">
        <q-td :props="props">
          <div>
            <q-toggle :value="props.row.blocked" @input="onBlockChange(props.row)" />
          </div>
        </q-td>
      </template>
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn icon="edit" color="blue-8" flat dense @click="editUser(props.row)" />
          <q-btn
            icon="delete"
            color="red"
            class="q-ml-sm"
            flat
            dense
            @click="deleteUser(props.row)"
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
import { Users } from "../services"
import UserModal from "components/UserModal"
const { capitalize } = format

export default {
  name: "UsersManagment",
  components: {
    BreadCrumbs: () => import("components/Dashboard/BreadCrumbs")
  },
  data () {
    return {
      loading: false,
      filter: "",
      columns: [
        { name: "email", label: "Email", field: "email", align: "center" },
        {
          name: "provider",
          label: "Provider",
          field: "provider",
          align: "center"
        },
        { name: "name", label: "Name", field: "displayName", align: "center" },
        {
          name: "role",
          label: "Role",
          field: "role",
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
        {
          name: "lastSignInTime",
          label: "Last Connection",
          field: "lastSignInTime",
          align: "center",
          format: (val) => date.formatDate(val, "HH:mm:ss DD-MM-YYYY")
        },
        {
          name: "blocked",
          label: "Blocked",
          field: "blocked",
          align: "center"
        },
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
    },
    editUser (user) {
      this.$q
        .dialog({
          component: UserModal,
          parent: this,
          user: user
        })
        .onOk((user) => {
          console.log(user)
        })
    },
    deleteUser (user) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Are you sure you want to delete the user?",
          ok: {
            outline: true,
            label: "Yes"
          },
          cancel: {
            outline: true,
            color: "red"
          },
          persistent: true
        })
        .onOk(() => {
          console.log("Deleting user...")
        })
    },
    addUser () {
      this.$q
        .dialog({
          component: UserModal,
          parent: this,
          user: null
        })
        .onOk((user) => {
          console.log(user)
        })
    },
    importUsers () {
      console.log("Import users")
    },
    onBlockChange (user) {
      const state = user.blocked ? "unblock" : "block"
      this.$q
        .dialog({
          title: "Confirm",
          message: `Are you sure you want to ${state} the user?`,
          ok: {
            outline: true,
            label: "Yes"
          },
          cancel: {
            outline: true,
            color: "red"
          },
          persistent: true
        })
        .onOk(() => {
          console.log("User block state changing...")
        })
    }
  }
}
</script>
