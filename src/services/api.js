import axios from 'axios';


export const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com', // API de test gratuite
    timeout: 10000, // 10 secondes de timeout
    headers: {
        'Content-Type': 'application/json'
    }
})


export const getPosts = async () => {
  const response = await api.get('/posts');
  return response.data;
};


export const getPostById = async (id) => {
  const response = await api.get(`/posts/${id}`);
  return response.data;
};


export const createPost = async (data) => {
  const response = await api.post('/posts', data);
  return response.data;
};
