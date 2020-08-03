<template>
  <q-form @submit="onRegister" @reset="onReset">
    <q-input
      class="q-mb-md"
      outlined
      v-model="form.name"
      label="Usuario" />
    <q-input
      class="q-mb-md"
      outlined
      v-model="form.email"
      type="email"
      label="Email" />
    <q-input
      class="q-mb-md"
      outlined
      v-model="form.password"
      type="password"
      label="Contraseña" />

      <q-btn label="Registrarse" type="submit" color="primary"/>
      <q-btn label="Resetear" type="reset" color="primary" flat class="q-ml-sm"/>
  </q-form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      form: {
        name: null,
        email: null,
        password: null
      }
    }
  },
  methods: {
    ...mapActions('auth', ['register']),
    onRegister () {
      this.register(this.form)
    },
    onReset () {
      this.form.name = null
      this.form.email = null
      this.form.password = null
    }
  }
}
</script>
