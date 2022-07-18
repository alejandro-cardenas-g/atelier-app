import axios from 'axios';

export const publicApi = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type' : 'application/json'
    }
});

export const privateApi = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer 1231nasscasdd2ca'
    }
})

