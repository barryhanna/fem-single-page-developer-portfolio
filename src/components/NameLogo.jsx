import React from 'react';
import { NameContext } from './NameProvider';

export default function NameLogo({ ...delegated }) {
  const { name } = React.useContext(NameContext);
  return (
    <p {...delegated} className="name-logo">
      {name.split(' ').join('').toLowerCase()}
    </p>
  );
}
