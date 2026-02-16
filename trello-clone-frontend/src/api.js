// api.js
const API_BASE_URL = 'http://localhost:8080/api';

export const fetchUsers = async () => {
  const response = await fetch(`${API_BASE_URL}/users`);
  return response.json();
};

export const fetchBoards = async () => {
  const response = await fetch(`${API_BASE_URL}/boards`);
  return response.json();
};

export const fetchLists = async () => {
  const response = await fetch(`${API_BASE_URL}/lists`);
  return response.json();
};

export const fetchCards = async () => {
  const response = await fetch(`${API_BASE_URL}/cards`);
  return response.json();
};

export const fetchComments = async () => {
  const response = await fetch(`${API_BASE_URL}/comments`);
  return response.json();
};