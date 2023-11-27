import React, { useState } from 'react';
import {  StyleSheet } from 'react-native';

import StartPage from './pages/Start';

const App = () => {
  const [start, setStart] = useState(false);

  const handleStart = () => {
    setStart((start => !start));
  };

  return (
    <>
    {start ? (<></>) :(<StartPage handleStart={handleStart} />)}
    </>

  );
};

export default App;
