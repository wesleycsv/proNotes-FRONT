import axios from "axios"
const Api = axios.create({baseURL: "http://localhost:4001"})
export default Api