import {  View,StyleSheet, Text } from 'react-native';
import {useFonts,Poppins_500Medium,Poppins_700Bold,} from '@expo-google-fonts/poppins';

const Title = () => {
    let [fontsLoaded] = useFonts({
        Poppins_500Medium,
    });
    if (!fontsLoaded) {
     return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Full</Text>
            <Text style={styles.text}>Sustainable</Text>
            <Text style={styles.text}>Cargo</Text>
            <Text style={styles.text}>Solution</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width:"100%",
        paddingBottom:"3rem",
      },
    text: {
      color: "white",
      fontSize: "3rem",
      textAlign:"left",
      lineHeight: "60px",
      fontFamily: 'Poppins_500Medium', 
    },
});

export default Title;