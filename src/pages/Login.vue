<template>
  <q-page class="row justify-center items-center">
    <div id="particles-js"></div>
    <q-card v-bind:style="$q.screen.lt.sm?{'width': '80%'}:{'width':'30%'}">
      <q-card-section>
        <q-avatar size="100px" class="absolute-center">
          <img src="profile.svg" />
        </q-avatar>
      </q-card-section>
      <q-card-section>
        <div class="text-center q-pt-lg">
          <div class="col text-h6 ellipsis">Login</div>
        </div>
      </q-card-section>
      <q-card-section>
        <q-form @submit="login" class="q-gutter-md">
          <q-input filled v-model="form.email" label="Email" type="email">
            <template v-slot:prepend>
              <q-icon name="email" />
            </template>
          </q-input>
          <q-input filled v-model="form.password" label="Password" type="password">
            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>
          </q-input>
          <div class="row justify-center">
            <q-btn push icon="login" label="Login" type="submit" color="primary" />
          </div>
        </q-form>
      </q-card-section>
      <q-card-actions align="center">
        <q-btn round @click="loginWithProvider('google')" size="20px">
          <q-icon name="fab fa-google" color="orange" />
        </q-btn>
        <q-btn round @click="loginWithProvider('facebook')" size="20px">
          <q-icon name="fab fa-facebook-f" color="blue-10" />
        </q-btn>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
import "particles.js"
import particlesConf from "assets/particles.json"
import { mapActions } from "vuex"

export default {
  data () {
    return {
      form: {
        email: "",
        password: ""
      }
    }
  },
  async mounted () {
    this.initParticles()
    const socialToken = this.$route.query.token
    if (socialToken) {
      this.$q.loading.show({ message: "Initializing dashboard..." })
      await this.handleIncomingToken(socialToken)
      this.$q.loading.hide()
    }
  },
  methods: {
    ...mapActions("auth", ["loginWithEmailAndPassword", "loginWithSocialProvider", "handleIncomingToken"]),
    initParticles () {
      window.particlesJS("particles-js", particlesConf)
    },
    loginWithProvider (provider) {
      this.loginWithSocialProvider(provider)
    },
    async login () {
      try {
        this.$q.loading.show({ message: "Authenticating..." })
        await this.loginWithEmailAndPassword(this.form)
      } catch (err) {
        this.$q.notify({ message: err, color: "negative" })
      } finally {
        this.$q.loading.hide()
      }
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
</style>
