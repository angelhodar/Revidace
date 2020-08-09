import axios from "axios"

export default ({ router, store, Vue }) => {
  axios.interceptors.response.use(undefined, function (err) {
    // If received Unauthorized from server then force to login
    if (err.status === 401) { router.push("/login") }
  })

  Vue.prototype.$http = axios
  store.$http = axios
}
