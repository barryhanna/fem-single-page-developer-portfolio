import React from 'react';

// name: 'Design Portfolio',
//     skills: ['HTML', 'CSS'],
//     screenshot: '/assets/images/thumbnail-project-1-large.webp',
//     link: 'http://website.com',
//     src: 'https://github.com',

export default function ProjectItem({
  name = 'Project',
  skills = [],
  screenshot = '',
  link = '',
  src = '',
}) {
  return (
    <div className="project-item">
      <img className="project-screenshot" src={screenshot} alt={name} />
      <h4 className="project-title">{name}</h4>
      <p className="project-skills">
        {skills.map((skill) => (
          <span>{skill}</span>
        ))}
      </p>
    </div>
  );
}
