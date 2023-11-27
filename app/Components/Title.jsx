import {  View,StyleSheet, Text } from 'react-native';

const Title = () => {
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
    },
  });
export default Title;