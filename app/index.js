import React, { useState } from 'react';
import StartPage from './pages/Start';
import InfoPage from './pages/Info';

const App = () => {
  const [start, setStart] = useState(false);

  const handleStart = () => {
    setStart((start => !start));
  };

  return (
    <>
    {start ? (<InfoPage handleEnd={handleStart} />) :(<StartPage handleStart={handleStart} />)}
    </>

  );
};

export default App;
