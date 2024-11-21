import axios from "axios";
import API_BASE_URL from "../api/config";

// Registre d'usuari
export const registerUser = async (userData) => {
  return axios.post(`${API_BASE_URL}/auth/register`, userData);
};

// Login d'usuari
export const loginUser = async (loginData) => {
  return axios.post(`${API_BASE_URL}/auth/login`, loginData);
};