import React from 'react';

interface ProjectProps {
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  githubLink?: string;
  liveDemoLink?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ 
  title, 
  description, 
  imageUrl, 
  techStack, 
  githubLink, 
  liveDemoLink 
}) => {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {techStack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      {githubLink && (
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      )}
      {liveDemoLink && (
        <a href={liveDemoLink} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      )}
    </div>
  );
};

export default ProjectCard;