
import axios from "axios";



export default axios.create({
    baseURL: "https://web-production-e72a.up.railway.app",
    // withCredentials: true,
    credentials:"include"    
})