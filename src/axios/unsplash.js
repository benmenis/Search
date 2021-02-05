import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {Authorization: 'Client-ID h-e-pDt83yX0rFXO8xUvthXbyhI5hMEVTpf-9zfbNSc'}
});