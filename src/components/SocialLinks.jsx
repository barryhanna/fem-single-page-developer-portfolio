import React from 'react';
import GithubIcon from '../components/icons/GithubIcon';
import FrontendMentorIcon from '../components/icons/FrontendMentorIcon';
import LinkedInIcon from '../components/icons/LinkedInIcon';
import TwitterIcon from '../components/icons/TwitterIcon';

export default function SocialLinks({ ...delegated }) {
  return (
    <nav {...delegated} className="social-links">
      <ul role="list">
        <li>
          <a href="#">
            <GithubIcon />
          </a>
        </li>
        <li>
          <a href="#">
            <FrontendMentorIcon />
          </a>
        </li>
        <li>
          <a href="#">
            <LinkedInIcon />
          </a>
        </li>
        <li>
          <a href="#">
            <TwitterIcon />
          </a>
        </li>
      </ul>
    </nav>
  );
}
