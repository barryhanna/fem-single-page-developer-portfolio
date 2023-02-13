import React from 'react';
import NameLogo from './NameLogo';
import SocialLinks from './SocialLinks';

export default function Navbar() {
  return (
    <div className="navbar columns">
      <NameLogo className="col-left" />
      <SocialLinks className="col-right" />
    </div>
  );
}
