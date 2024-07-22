// src/components/Projects.jsx
import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const projects = [
  {
    title: 'AI Chatbot for Customer Support',
    description: 'Developed an AI-powered chatbot to assist customers with their inquiries in real-time, reducing response time and improving customer satisfaction.',
    imageUrl: '/src/assets/images/im3.png'
  },
  {
    title: 'Image Recognition App',
    description: '  Implemented an application that uses machine learning algorithms to identify and classify objects in images, with applications in security and inventory management.',
    imageUrl: '/src/assets/images/project2.jpg'
  },
  // Add more projects as needed
];

const Projects = () => (
  <div className="projects">
    <h2>My Projects</h2>
    <div className="project-cards">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  </div>
);

export default Projects;
