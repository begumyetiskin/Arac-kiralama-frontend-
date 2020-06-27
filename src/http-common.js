import axios from "axios";
import Vue from 'vue';
let httpClient = axios.create({
    install (Vue, options) {
        Vue.prototype.$axios = ax
    },
    baseURL: "http://localhost:8080/api",
  
  headers: {
    "Content-type": "application/json",
  }
});

httpClient.interceptors.response.use((response) => {
    console.log("Server response is : \n" , response)
    return response;
  }, error => {
      
    console.warn('Error status', error.response)
   
    const vm = new Vue()
        vm.$toaster.error(error.response.data.message)
    
    return error;
  }) 



export default httpClient;
