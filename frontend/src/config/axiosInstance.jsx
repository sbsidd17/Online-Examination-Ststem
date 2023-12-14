import axios from 'axios';

const BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
})

export default axiosInstance
