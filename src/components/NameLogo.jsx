import React from 'react';
import { NameContext } from './NameProvider';

export default function NameLogo() {
  const { name } = React.useContext(NameContext);
  return <p className="name-logo">{name.split(' ').join('').toLowerCase()}</p>;
}
