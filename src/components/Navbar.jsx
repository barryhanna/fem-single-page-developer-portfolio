import React from 'react';
import SocialLinks from './SocialLinks';

export default function Navbar() {
  return (
    <div className="navbar">
      <div>
        <p className="name-logo">adamkeyes</p>
      </div>
      <SocialLinks />
    </div>
  );
}
