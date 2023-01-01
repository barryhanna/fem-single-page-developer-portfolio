import React from 'react';
import Container from './Container';

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
            <img src="../assets/images/thumbnail-project-1-small.webp" alt="" />
            <h4 className="project-title">Design Portfolio</h4>
            <div className="skills">
              <p>
                <span>HTML</span>
                <span>CSS</span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
