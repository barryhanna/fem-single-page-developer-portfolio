import React from 'react';

export default function ProjectItem({
  name = 'Project',
  skills = [],
  screenshot = '',
  link = '',
  src = '',
}) {
  return (
    <div className="project-item">
      <div className="project-item-image">
        <div className="project-item-image__overlay">
          <a href={link} target="_blank">
            View Project
          </a>
          <a href={src} target="_blank">
            View Code
          </a>
        </div>
        <img className="project-screenshot" src={screenshot} alt={name} />
      </div>
      <h4 className="project-title">{name}</h4>
      <p className="project-skills">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </p>
    </div>
  );
}
