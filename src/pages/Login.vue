<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex flex-center">
        <div id="particles-js"></div>
        <q-card v-bind:style="$q.screen.lt.sm?{'width': '70%'}:{'width':'30%'}">
          <q-card-section>
            <q-avatar size="103px" class="absolute-center shadow-10">
              <img src="profile.svg" />
            </q-avatar>
          </q-card-section>
          <q-card-section>
            <div class="text-center q-pt-lg">
              <div class="col text-h6 ellipsis">Log in</div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form @submit="onLogin" class="q-gutter-md">
              <q-input filled v-model="form.email" label="Email" type="email" />
              <q-input filled v-model="form.password" label="Password" type="password" />
              <q-btn
                push
                rounded
                class="flex flex-center"
                icon="login"
                label="Login"
                to="/dashboard"
                type="submit"
                color="primary"
              />
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import "particles.js"
import particlesConf from "assets/particles.json"
import { mapActions } from "vuex"

export default {
  data () {
    return {
      form: {
        email: null,
        password: null
      }
    }
  },
  mounted () {
    this.initParticles()
  },
  methods: {
    ...mapActions("auth", ["login"]),
    initParticles () {
      window.particlesJS("particles-js", particlesConf)
    },
    onLogin () {
      this.login(this.form)
    }
  }
}
</script>

<style>
#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #000000;
}
.login-form {
  position: absolute;
}
</style>
