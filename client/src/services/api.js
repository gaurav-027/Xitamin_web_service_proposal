import axios from 'axios';

const BASE_URL = 'https://xitamin-web-service-proposal.onrender.com';

const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
});

export const submitLead = (data) => api.post('/api/leads', data);

export default api;