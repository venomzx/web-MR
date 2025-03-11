import axios from "axios";
import store from "../store";

// default path for fortune-telling
const instance = axios.create({
    baseURL: "https://mr-test-create-assignments.onrender.com",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
})

instance.interceptors.request.use((config) => {
    
    // Check json request header 

    // if(store.getters.isAuthenticated){
    //     console.log(config.headers)
    //     config.headers.Authorization = 'Bearer ' + store.getters.token
        
    // }
    return config;
});

export default instance;