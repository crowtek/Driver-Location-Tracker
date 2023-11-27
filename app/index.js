import React, { useState } from 'react';
import { View, ImageBackground, StyleSheet, Text } from 'react-native';
import {LocationTracker} from './Components/LocationTracker';

import StartButton from './Components/StartButton';
import EditButton from './Components/EditButton';
import Title from './Components/Title';

const App = () => {
  const [showInput, setShowInput] = useState(true);

  const handleButtonPress = () => {
    setShowInput(false);
  };
  const handleEditButtonPress = () => {
    setShowInput(true);
  };

  return (
    <ImageBackground
    source={require('../assets/background.jpg')} 
    style={styles.container}
    resizeMode="cover"
  >

      {showInput ? (
        <View style={styles.inputContainer}>
          <Title />
          <StartButton handleButtonPress={handleButtonPress}/>
        </View>
        ) :
        (
          <View style={styles.hiddenDiv}>
            <EditButton handleEditButtonPress={handleEditButtonPress}/>
          </View>
        )
      }


    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height:"100dvh",
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
  },
  inputContainer: {
    zIndex: 5,
    width: "100%",
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hiddenDiv:{
    zIndex: 5,
    flexDirection:"row"
  },
  editText:{
    flex:1,
    padding:10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor:"white"
  },
});

export default App;
