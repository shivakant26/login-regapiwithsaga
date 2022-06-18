import axios from "axios";

export const http = axios.create({
    baseURL : "https://react-rails-api-demo.herokuapp.com/api/v1",
    headers : {
        "Content-type" : "application/json"
    }
})
