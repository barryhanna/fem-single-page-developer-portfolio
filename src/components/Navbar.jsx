import React from 'react';
import NameLogo from './NameLogo';
import SocialLinks from './SocialLinks';

export default function Navbar() {
  return (
    <div className="navbar">
      <NameLogo />
      <SocialLinks />
    </div>
  );
}
