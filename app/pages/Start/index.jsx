import { View, ImageBackground, StyleSheet } from 'react-native';
import StartButton from './components/StartButton';
import Title from './components/Title';

const StartPage = ({handleStart}) => {
    return (
        <ImageBackground
            source={require('./components/background.jpg')} 
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
  });
export default StartPage;