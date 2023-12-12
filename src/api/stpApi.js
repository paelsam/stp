import axios from "axios";




const stpApi = axios.create({
    baseURL: 'https://stp-api-zhbr.onrender.com'
})

export default stpApi;