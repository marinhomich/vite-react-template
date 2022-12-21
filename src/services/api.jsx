import axios from "axios";

const APP_BASE_URL = ''

const api = axios.create({
    baseURL: APP_BASE_URL
})

export default api
