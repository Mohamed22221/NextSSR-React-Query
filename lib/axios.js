

import axios from "axios";

const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
})

export const request = async (options) => {
    client.defaults.headers.common.Accept = "application/json";
    if (options.jwt)
      client.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
        "jwt"
      )}`;
  
    const onSuccess = (response) => {
        return response?.data;
    };

    const onError = (error) => {
        return Promise.reject(error.response?.data);
    };

    return client(options).then(onSuccess).catch(onError);
};