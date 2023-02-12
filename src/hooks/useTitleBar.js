import React from 'react';

function useTitleBar({ titleBarText = '' }) {
  const [title, setTitle] = React.useState(titleBarText);
  React.useEffect(() => {
    document.title = title;
  }, [titleBarText]);
  return setTitle;
}

export default useTitleBar;
