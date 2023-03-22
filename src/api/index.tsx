import axios from "axios"

const api = axios.create({
  baseURL: "https://lychee.justdesignfx.com/jd-admin/services/",
  headers: {
    "Content-type": "application/json",
  },
})

export default api
