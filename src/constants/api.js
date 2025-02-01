import axios from 'axios'

const api = axios.create({
// baseURL: 'http://43.228.126.245:4023',
// http://192.64.114.83:2029'
// baseURL: 'http://192.64.114.83:2029',
baseURL: 'https://ecas.unitdtechnologies.com:2062',
// baseURL: 'http://localhost:3001'
});

export default api