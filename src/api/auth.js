
// to call the api we use axios or fetch
import axios from 'axios';

const USE_MOCK_API = true; // set to false when you want to use real backend
// if USE_MOCK_API is true, we use mock data


// axios create is method which calls api
const API = axios.create({ baseURL: 'http://localhost:5000' });


// export const register = (data) => API.post('/api/auth/register', data);
// export const login = (data) => API.post('/api/auth/login', data);
// export const logout = (token) => API.post('/api/auth/logout', {}, { headers: { Authorization: `Bearer ${token}` } });
// export const forgotPassword = (data) => API.post('/api/auth/forgot-password', data);
// export const resetPassword = (token, data) => API.post(`/api/auth/reset-password/${token}`, data);
// export const getProfile = (token) => API.get('/api/user/profile', { headers: { Authorization: `Bearer ${token}` } });
// export const updateProfile = (token, formData) => API.put('/api/user/profile', formData, { headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'multipart/form-data' } });


export const register = (data) => {
  if (USE_MOCK_API) {
    return new Promise((resolve) =>
      setTimeout(() => resolve({ data: { message: 'Mock: Registered successfully' } }), 1000)
    );
  }
  return API.post('/api/auth/register', data);
};

export const login = (data) => {
  if (USE_MOCK_API) {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        if (data.email === 'test@example.com' && data.password === '123456') {
          resolve({
            data: {
              token: 'mock-token',
              user: { name: 'Test User', email: 'test@example.com', _id: 'mock-id-123' }
            }
          });
        } else {
          reject({ response: { data: { message: 'Mock: Invalid credentials' } } });
        }
      }, 1000)
    );
  }
  return API.post('/api/auth/login', data);
};

export const logout = (token) => {
  if (USE_MOCK_API) {
    return new Promise((resolve) =>
      setTimeout(() => resolve({ data: { message: 'Mock: Logged out' } }), 500)
    );
  }
  return API.post('/api/auth/logout', {}, { headers: { Authorization: `Bearer ${token}` } });
};

export const forgotPassword = (data) => {
  if (USE_MOCK_API) {
    return new Promise((resolve) =>
      setTimeout(() => resolve({ data: { message: 'Mock: Reset link sent' } }), 1000)
    );
  }
  return API.post('/api/auth/forgot-password', data);
};

export const resetPassword = (token, data) => {
  if (USE_MOCK_API) {
    return new Promise((resolve) =>
      setTimeout(() => resolve({ data: { message: 'Mock: Password reset' } }), 1000)
    );
  }
  return API.post(`/api/auth/reset-password/${token}`, data);
};

export const getProfile = (token) => {
  if (USE_MOCK_API) {
    return new Promise((resolve) =>
      setTimeout(() =>
        resolve({
          data: {
            name: 'Mock User',
            email: 'mock@example.com',
            _id: 'mock-id',
            profileImage: 'https://via.placeholder.com/150'
          }
        }), 1000)
    );
  }
  return API.get('/api/user/profile', { headers: { Authorization: `Bearer ${token}` } });
};

export const updateProfile = (token, formData) => {
  if (USE_MOCK_API) {
    return new Promise((resolve) =>
      setTimeout(() => resolve({ data: { message: 'Mock: Profile updated' } }), 1000)
    );
  }
  return API.put('/api/user/profile', formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data'
    }
  });
};
