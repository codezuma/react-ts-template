import axios from 'axios';

const api = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
    withCredentials:true,
    });

// Add an interceptor to set CORS headers
api.interceptors.request.use((config) => {
    config.headers['Access-Control-Allow-Origin'] =
        'http://localhost:5173';
    config.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE';
    config.headers['Access-Control-Allow-Headers'] =
        'Content-Type, Authorization';
    config.headers['Access-Control-Allow-Credentials'] = 'true';
    return config;
});

export default api;
