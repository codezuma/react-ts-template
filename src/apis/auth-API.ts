import api from './config/axios-config';

export const authAPI = {
  registerPatient: async (payload:RegisterUser) => api.post('/auth/register', payload),
};


