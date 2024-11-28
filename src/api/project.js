// URL base para la API, donde se realizarán las solicitudes
const API_URL = import.meta.env.VITE_API_URL || "https://backend2-h2re.onrender.com/api";

// Función para crear un nuevo proyecto
export const createProject = async (projectData) => {
  const response = await fetch(`${API_URL}/proyectos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(projectData),
  });

  return response.json();
};

// Función para obtener todos los proyectos
export const getProjects = async () => {
  const response = await fetch(`${API_URL}/proyectos`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};

// Función para actualizar un proyecto existente
export const updateProject = async (id, projectData, token) => {
  const response = await fetch(`${API_URL}/proyectos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // Incluye el token de autorización
    },
    body: JSON.stringify(projectData),
  });

  return response.json();
};

// Función para eliminar un proyecto
export const deleteProject = async (id, token) => {
  const response = await fetch(`${API_URL}/proyectos/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`, // Incluye el token de autorización
    },
  });

  return response.json();
};
