import React from 'react';

export default function Container({ children, ...delegated }) {
  return (
    <div className="container" {...delegated}>
      {children}
    </div>
  );
}
