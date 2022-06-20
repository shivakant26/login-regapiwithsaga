import axios from "axios";

const http = axios.create({
    baseURL : "https://react-rails-api-demo.herokuapp.com/api/v1",
    headers : {
        "Content-type" : "application/json"
    }
});
http.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization =  token ? `${token}` : '';
    return config;
  });
  
export default http;