import React from 'react';

function useClientWidth() {
  const [width, setWidth] = React.useState(window.innerWidth);

  function setClientWidth() {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  }

  React.useEffect(() => {
    window.addEventListener('resize', setClientWidth);
    return () => window.removeEventListener('resize', setClientWidth);
  }, []);
  return width;
}

export default useClientWidth;
