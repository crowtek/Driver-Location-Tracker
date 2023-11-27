import { Text, TouchableOpacity,StyleSheet } from 'react-native';
import {useFonts,Poppins_500Medium,Poppins_700Bold,} from '@expo-google-fonts/poppins';

const StartButton = ({handleButtonPress}) => {
    let [fontsLoaded] = useFonts({
        Poppins_500Medium,
    });
    if (!fontsLoaded) {
     return null;
    }
    return (
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
            <Text style={styles.buttonText} >Start</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button:{
      width: "100%",
      backgroundColor: '#696464a6',
      borderRadius: 25,
      padding: 15,
      justifyContent: "center",
      alignItems: "center",
    },
    buttonText:{
        color: "white",
        fontSize: "1.5rem",
        fontFamily: 'Poppins_500Medium', 
    },
});

export default StartButton;