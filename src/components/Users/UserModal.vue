<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="q-pa-md" :style="$q.screen.lt.sm?{'width': '100%'}:{'width':'200%'}">
      <q-card-section>
        <div class="row">
          <q-icon :name="user != null ? 'edit' : 'person_add'" size="lg" />
          <div class="text-h4 q-pl-md">{{ user != null ? "Update User" : "Add User" }}</div>
        </div>
      </q-card-section>

      <q-card-section class="q-gutter-md">
        <q-input outlined v-model="email" label="Email" type="email">
          <template v-slot:prepend>
            <q-icon name="email" />
          </template>
        </q-input>
        <q-input outlined v-model="password" label="Password" type="password">
          <template v-slot:prepend>
            <q-icon name="lock" />
          </template>
        </q-input>
        <q-input outlined v-model="displayName" label="Name" >
          <template v-slot:prepend>
            <q-icon name="face" />
          </template>
        </q-input>
        <q-select outlined v-model="role" :options="['Admin', 'Manager', 'User']" label="Role">
          <template v-slot:prepend>
            <q-icon name="supervisor_account" />
          </template>
        </q-select>
        <q-input outlined v-model="photoURL" type="url" label="Photo URL">
          <template v-slot:prepend>
            <q-icon name="photo" />
          </template>
        </q-input>
      </q-card-section>

      <q-card-actions align="around" >
        <q-btn
          outline
          color="primary"
          :label="user != null ? 'Update' : 'Add'"
          @click="onClick"
        />
        <q-btn
          outline
          color="red"
          label="Cancel"
          @click="hide"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { format } from "quasar"
const { capitalize } = format

export default {
  name: "UserModal",
  props: {
    user: Object
  },
  data () {
    return {
      id: "",
      email: "",
      password: "",
      displayName: "",
      role: "",
      photoURL: ""
    }
  },
  mounted () {
    if (this.user) this.updateData(this.user)
  },
  methods: {
    updateData () {
      this.id = this.user.id
      this.email = this.user.email
      this.password = this.user.password
      this.displayName = this.user.displayName
      this.role = capitalize(this.user.role)
      this.photoURL = this.user.photoURL
    },
    show () {
      this.$refs.dialog.show()
    },
    hide () {
      this.$refs.dialog.hide()
    },
    onDialogHide () {
      this.$emit("hide")
    },
    onClick () {
      this.$emit("ok", {
        id: this.id,
        data: {
          email: this.email,
          password: this.password,
          displayName: this.displayName,
          role: this.role.toLowerCase(),
          photoURL: this.photoURL
        }
      })
      this.hide()
    }
  }
}
</script>
