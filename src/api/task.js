// URL base para la API, donde se realizarán las solicitudes
const API_URL = import.meta.env.VITE_API_URL || "https://backend2-h2re.onrender.com/api";

// Función para crear una nueva tarea en un proyecto específico
export const createTask = async (projectId, taskData, token) => {
  const response = await fetch(`${API_URL}/proyectos/${projectId}/tareas`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // Incluye el token de autorización
    },
    body: JSON.stringify(taskData),
  });

  return response.json();
};

// Función para obtener todas las tareas de un proyecto específico
export const getTasks = async (projectId, token) => {
  const response = await fetch(`${API_URL}/proyectos/${projectId}/tareas`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`, // Incluye el token de autorización
    },
  });

  return response.json();
};

// Función para actualizar una tarea existente
export const updateTask = async (taskId, taskData, token) => {
  const response = await fetch(`${API_URL}/tareas/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // Incluye el token de autorización
    },
    body: JSON.stringify(taskData),
  });

  return response.json();
};

// Función para eliminar una tarea
export const deleteTask = async (taskId, token) => {
  const response = await fetch(`${API_URL}/tareas/${taskId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`, // Incluye el token de autorización
    },
  });

  return response.json();
};
