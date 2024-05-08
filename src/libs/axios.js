import axios from 'axios'

const axiosIns = axios.create({
  baseURL: process.env.VUE_APP_ROOT_API
})
export default axiosIns