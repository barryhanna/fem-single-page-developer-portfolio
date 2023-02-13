import React from 'react';
import useClientWidth from '../hooks/useClientWidth';
import constants from '../data/constants';

export default function ProjectItem({
  name = 'Project',
  skills = [],
  screenshot = '',
  link = '',
  src = '',
}) {
  const width = useClientWidth();

  return (
    <div className="project-item">
      <div className="project-item-image">
        <img className="project-screenshot" src={screenshot} alt={name} />
        {width > constants.screensizes.medium && (
          <div className="project-item-image__overlay">
            <a href={link} target="_blank">
              View Project
            </a>
            <a href={src} target="_blank">
              View Code
            </a>
          </div>
        )}
      </div>
      <h4 className="project-title">{name}</h4>
      <p className="project-skills">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </p>
      {width <= constants.screensizes.medium && (
        <div className="project-item-expanded-overlay">
          <a href={link} target="_blank">
            View&nbsp;Project
          </a>
          <a href={src} target="_blank">
            View&nbsp;Code
          </a>
        </div>
      )}
    </div>
  );
}
