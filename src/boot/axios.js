import axios from "axios"

export default ({ router, Vue }) => {
  axios.interceptors.response.use(undefined, function (err) {
    // If received Unauthorized from server then force to login
    if (err.status === 401) { router.replace("/login") }
  })

  Vue.prototype.$http = axios
}
