import { Text, TouchableOpacity,StyleSheet } from 'react-native';

const StartButton = ({handleButtonPress}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
            <Text style={styles.buttonText} >Los gehts</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button:{
      width: "90%",
      height: 50,
      backgroundColor: "#2A304E",
      borderRadius: 5,
      padding: 10,
      justifyContent: "center",
      alignItems: "center"
    },
    buttonText:{
        color: "white",
        fontSize: 18
    },
});

export default StartButton;