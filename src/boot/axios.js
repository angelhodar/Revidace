import axios from "axios"
import qs from "query-string"

const api = axios.create({
  baseURL: `${process.env.API_URL}/api/v1`,
  paramsSerializer: (params) => {
    // This arrayFormat is required for module api-query-params on server
    return qs.stringify(params, { arrayFormat: "comma" })
  }
})

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
