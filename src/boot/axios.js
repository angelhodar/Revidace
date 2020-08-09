import axios from "axios"
import firebaseService from "../services/firebase"

const api = axios.create({
  baseURL: "http://localhost:5000/api/v1"
})

export default ({ store, Vue }) => {
  api.interceptors.request.use(async req => {
    const token = await firebaseService.auth().currentUser.getIdToken()
    req.headers.Authorization = `Bearer ${token}`
    return req
  })

  Vue.prototype.$api = api
  store.$api = api
}
