import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { getProjects, createProject, updateProject, deleteProject } from "../api/project";
import { useNavigate } from "react-router-dom";
import './Projects.css';

const Projects = () => {
  const { token, logout } = useContext(AuthContext); // Obtiene el token de autenticación y la función de logout
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newProject, setNewProject] = useState({
    nombre: "",
    descripcion: "",
    fechaInicio: "",
    fechaFin: "",
  });
  const [editingProject, setEditingProject] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsData = await getProjects(token);
      if (Array.isArray(projectsData)) {
        setProjects(projectsData);
      } else {
        console.error("La respuesta de la API no es un array:", projectsData);
        setProjects([]);
      }
    };
    fetchProjects();
  }, [token]);

  const handleCreateOrUpdateProject = async (e) => {
    e.preventDefault();
    if (editingProject) {
      const updatedProject = await updateProject(editingProject._id, newProject, token);
      setProjects(projects.map((proj) => (proj._id === updatedProject._id ? updatedProject : proj)));
      setEditingProject(null);
    } else {
      const newProjectData = await createProject(newProject, token);
      setProjects([...projects, newProjectData]);
    }
    setNewProject({ nombre: "", descripcion: "", fechaInicio: "", fechaFin: "" });
    setShowForm(false);
  };

  const handleEditProject = (project) => {
    setNewProject(project);
    setEditingProject(project);
    setShowForm(true);
  };

  const handleDeleteProject = async (id) => {
    await deleteProject(id, token);
    setProjects(projects.filter((project) => project._id !== id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="projects-container">
      {/* Botón de cerrar sesión */}
      <button className="logout-button" onClick={logout}>Cerrar Sesión</button>
      
      <h1>Proyectos</h1>
      {/* Botón para agregar un nuevo proyecto */}
      <button className="add-project-button" onClick={() => setShowForm(!showForm)}>
        {showForm ? "Cancelar" : "Agregar Proyecto"}
      </button>

      {showForm && (
        <form onSubmit={handleCreateOrUpdateProject}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre del proyecto"
            value={newProject.nombre}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="descripcion"
            placeholder="Descripción del proyecto"
            value={newProject.descripcion}
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="fechaInicio"
            placeholder="Fecha de inicio"
            value={newProject.fechaInicio}
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="fechaFin"
            placeholder="Fecha de fin"
            value={newProject.fechaFin}
            onChange={handleInputChange}
          />
          <button type="submit">
            {editingProject ? "Actualizar Proyecto" : "Guardar Proyecto"}
          </button>
        </form>
      )}

      <ul>
        {projects.map((project) => (
          <li key={project._id}>
            <strong>{project.nombre}</strong> - {project.descripcion}
            <button onClick={() => handleEditProject(project)}>Editar</button>
            <button onClick={() => handleDeleteProject(project._id)}>Eliminar</button>
            <button onClick={() => navigate(`/projects/${project._id}/tasks`)}>Ver tarea</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
