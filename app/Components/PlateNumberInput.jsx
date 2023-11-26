import { TextInput,StyleSheet } from 'react-native';

const PlateNumberInput = ({inputValue,handleInputChange}) => {
    return(
        <TextInput
            style={styles.input}
            onChangeText={handleInputChange}
            value={inputValue}
            placeholder="Kennzeichen Eingeben ..."
            placeholderTextColor="gray"
        />
    )
}

const styles = StyleSheet.create({
    input: {
      width: "90%",
      height: 55,
      color: "#2A304E",
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
      fontSize: 20,
      backgroundColor:"white"
    },
});

export default PlateNumberInput;