import axios from 'axios';

// url pointing to backend route
const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization =   `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
});

// routes for signin and signup for the backend
export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);