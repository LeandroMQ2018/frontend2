// src/api/auth.js

// URL base para la API, donde se realizarán las solicitudes
const API_URL = import.meta.env.VITE_API_URL || "https://backend2-h2re.onrender.com/api";

export const registerUser = async (formData) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  return response.json();
};

export const loginUser = async (credentials) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  return response.json();
};
