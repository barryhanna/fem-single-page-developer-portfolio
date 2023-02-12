import React from 'react';
import constants from '../data/constants';

export const NameContext = React.createContext();

function NameProvider({ children }) {
  return (
    <NameContext.Provider value={{ name: constants.name }}>
      {children}
    </NameContext.Provider>
  );
}

export default NameProvider;
