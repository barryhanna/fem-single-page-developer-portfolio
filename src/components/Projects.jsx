import React from 'react';
import Container from './Container';
import projectImg1 from '../assets/images/thumbnail-project-1-large.webp';

export default function Projects() {
  return (
    <div>
      <Container>
        <div className="projects-header">
          <h2>Projects</h2>
          <button>Contact Me</button>
        </div>
        <div className="projects-list">
          <div className="project-item">
            <img className="project-screenshot" src={projectImg1} alt="" />
            <h4 className="project-title">Design Portfolio</h4>
            <p className="project-skills">
              <span>HTML</span>
              <span>CSS</span>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
