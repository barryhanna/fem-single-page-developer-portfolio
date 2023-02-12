import React from 'react';
import Container from './Container';
import projects from '../data/projects.js';
import ProjectItem from './ProjectItem';

export default function Projects() {
  return (
    <div>
      <Container>
        <div className="projects-header">
          <h2>Projects</h2>
          <a href="#contact" className="btn">
            Contact Me
          </a>
        </div>
        <div className="projects-list">
          {projects.map((project, i) => (
            <ProjectItem key={`${project.link}:${i}`} {...project} />
          ))}
        </div>
      </Container>
    </div>
  );
}
