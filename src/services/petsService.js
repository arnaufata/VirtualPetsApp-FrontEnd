import axios from "axios";
import API_BASE_URL from "../api/config";

// Obtenir totes les mascotes
export const getAllPets = async (token) => {
  return axios.get(`${API_BASE_URL}/pets`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// Crear una nova mascota
export const createPet = async (petData, token) => {
  return axios.post(`${API_BASE_URL}/pets/create`, petData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// Eliminar una mascota
export const deletePet = async (petId, token) => {
  return axios.delete(`${API_BASE_URL}/pets/delete/${petId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// Actualitzar una mascota
export const updatePet = async (petId, petData, token) => {
  if (!petData || !petData.name) {
    throw new Error("Pet data is invalid. Name is required.");
  }
  return axios.put(`${API_BASE_URL}/pets/update/${petId}`, petData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};

// Interactuar amb una mascota
export const interactWithPet = async (petId, action, token) => {
  return axios.post(`${API_BASE_URL}/pets/interact/${petId}?action=${action}`, {}, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// Opcional: obtenir els rols de l'usuari
export const getUserRoles = async (token) => {
  return axios.get(`${API_BASE_URL}/user/roles`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};