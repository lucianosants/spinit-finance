import axios from 'axios';

const api = axios.create({
    baseURL: process.env.API_KEY,
});

export { axios, api };
