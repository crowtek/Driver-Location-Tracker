import { Image, StyleSheet, TouchableOpacity } from 'react-native';

const EditButton = ({handleEditButtonPress}) => {
    return (
        <TouchableOpacity style={styles.editButton} onPress={handleEditButtonPress}>
            <Image source={require('../../assets/edit.png')}style={styles.editImage}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    editButton:{
      width: 40,
      height: 40,
      padding: 5
    },
    editImage: {
      width: 30,
      height: 30,
    },
  });
  

export default EditButton;