import { View, ImageBackground, StyleSheet } from 'react-native';
import StartButton from '../Components/StartButton';
import Title from '../Components/Title';

const StartPage = ({handleStart}) => {
    return (
        <ImageBackground
            source={require('../../assets/background.jpg')} 
            style={styles.container}
            resizeMode="cover"
        >
            <View style={styles.inputContainer}>
                <Title />
                <StartButton handleButtonPress={handleStart}/>
            </View>
        </ImageBackground>
    )
}
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
export default StartPage;