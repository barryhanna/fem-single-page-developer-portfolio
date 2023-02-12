import React from 'react';
import constants from '../data/constants';

export const NameContext = React.createContext();

function NameProvider({ children }) {
  const { name } = constants;

  React.useEffect(() => {
    document.title = `${name} | Developer Profile`;
  }, []);

  // useTitleBar(`${name} Developer Portfolio`);

  return (
    <NameContext.Provider value={{ name: constants.name }}>
      {children}
    </NameContext.Provider>
  );
}

export default NameProvider;
