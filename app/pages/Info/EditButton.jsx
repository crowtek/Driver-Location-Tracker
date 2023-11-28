import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const EndButton = ({handleClick}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={handleClick}>
            <Text style={styles.text}>Stop</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
      width: "100%",
      backgroundColor: '#1c2832',
      borderRadius: 25,
      padding: 15,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      color: "white",
      fontSize: "1.5rem",
      fontFamily: 'Poppins_500Medium', 
    },
  });
  

export default EndButton;