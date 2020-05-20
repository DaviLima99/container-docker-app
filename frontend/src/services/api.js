import axios from 'axios';

const api = axios.create({
    'baseURL' : 'http://node-container:3333'
})

export default api;