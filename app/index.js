import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {LocationTracker} from './Components/LocationTracker';

import PlateNumberInput from './Components/PlateNumberInput';

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
    <View style={styles.container}>
      {showInput ? (
        <View style={styles.inputContainer}>
          <PlateNumberInput inputValue={inputValue} handleInputChange={handleInputChange}/>

          <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
            <Text style={styles.buttonText} >Los gehts</Text>
          </TouchableOpacity>
        </View>) :(
          <View style={styles.hiddenDiv}>
            <Text style={styles.editText}>{plateName}</Text>
            <TouchableOpacity style={styles.editButton} onPress={handleEditButtonPress}>
              <Image source={require('../assets/edit.png')}style={styles.editImage}/>
            </TouchableOpacity>
          </View>
        )
      }

      <Text><LocationTracker licenseNumber={plateName}/></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
    backgroundColor: "white",
  },
  inputContainer: {
    zIndex: 5,
    width: "100%",
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"white",
  },
  button:{
    width: "90%",
    height: 50,
    backgroundColor: "#2A304E",
    borderRadius: 5,
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 30,
    height: 30,
    tintColor: 'white' 
  },
  buttonText:{
    color: "white",
    fontSize: 18
  },
  hiddenDiv:{
    zIndex: 5,
    backgroundColor: "white",
    flexDirection:"row"
  },
  editButton:{
    width: 40,
    height: 40,
    padding: 5
  },
  editText:{
    flex:1,
    padding:10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  editImage: {
    width: 30,
    height: 30,
  },
  backgroundLogo:{
    position: "absolute",
    top: 30,
    left:0,
    width: 100,
    height:100
  }
});

export default App;
