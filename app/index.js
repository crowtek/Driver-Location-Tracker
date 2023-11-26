import React, { useState } from 'react';
import { View, ImageBackground, StyleSheet, Text } from 'react-native';
import {LocationTracker} from './Components/LocationTracker';

import PlateNumberInput from './Components/PlateNumberInput';
import StartButton from './Components/StartButton';
import EditButton from './Components/EditButton';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [plateName, setPlateName]  = useState('');
  const [showInput, setShowInput] = useState(true);

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const handleButtonPress = () => {
    setPlateName(inputValue.toUpperCase());
    setShowInput(false);
    setInputValue("");
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
      <LocationTracker licenseNumber={plateName}/>

      {showInput ? (
        <View style={styles.inputContainer}>
          <PlateNumberInput inputValue={inputValue} handleInputChange={handleInputChange}/>
          <StartButton handleButtonPress={handleButtonPress}/>
        </View>
        ) :
        (
          <View style={styles.hiddenDiv}>
            <Text style={styles.editText}>{plateName}</Text>
            <EditButton handleEditButtonPress={handleEditButtonPress}/>
          </View>
        )
      }


    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height:"100vh",
    justifyContent: 'space-around',
    alignItems: 'center',
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
