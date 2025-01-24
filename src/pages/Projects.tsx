import React from 'react';
import Navbar from '../components/Nav';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    // Your project data here
    { 
      title: 'Project 1', 
      description: '...', 
      imageUrl: './path/to/image.jpg', 
      techStack: ['React', 'TypeScript', 'Node.js'], 
      githubLink: 'https://github.com/...', 
      liveDemoLink: 'https://...' 
    },
    // ... more projects
  ];

  return (
    <div>
      <Navbar />
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} /> 
        ))}
      </div>
    </div>
  );
};

export default Projects;