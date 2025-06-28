import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const createDocument = async (doc) => {
  const response = await axios.post(`${API_URL}/documents`, doc);
  return response.data;
};

export const getDocument = async (id) => {
  const response = await axios.get(`${API_URL}/documents/${id}`);
  return response.data;
};
