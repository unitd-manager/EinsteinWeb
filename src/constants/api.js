import axios from 'axios'

const api = axios.create({
// baseURL: 'http://43.228.126.245:4023',
baseURL: 'http://192.64.114.83:2061',
// baseURL: 'http://localhost:3001'
});

export default api