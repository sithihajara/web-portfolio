// src/components/ProjectCard.jsx
import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <img src={project.imageUrl} alt={project.title} />
    <h3>{project.title}</h3>
    <p>{project.description}</p>
  </div>
);

export default ProjectCard;
