import axios from "axios"

const baseURL = process.env.DEV
  ? "http://localhost:5000/api/v1"
  : "https://agrelink-api.herokuapp.com/api/v1"

const api = axios.create({ baseURL })

export default ({ store, Vue }) => {
  api.interceptors.response.use(
    response => response,
    error => {
      if (error.response.status === 401) {
        this.$store.dispatch("auth/logout", { root: true })
      }
      return Promise.reject(error)
    }
  )

  Vue.prototype.$api = api
  store.$api = api
}
