import axios from "axios";




const stpApi = axios.create({
    baseURL: 'http://localhost:8080'
})

export default stpApi;