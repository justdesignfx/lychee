import axios from "axios"

const api = axios.create({
  baseURL: "https://lycheedigital.co/jd-admin/services/",
  headers: {
    "Content-type": "application/json",
  },
})

export default api
