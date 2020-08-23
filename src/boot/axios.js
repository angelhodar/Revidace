import axios from "axios"

const api = axios.create({ baseURL: `${process.env.API_URL}/api/v1` })

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
