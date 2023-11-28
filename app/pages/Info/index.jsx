import { View, StyleSheet } from 'react-native';
import EndButton from './EditButton';
import LocationTracker from './LocationTracker';

const InfoPage = ({handleEnd}) => {
    return (
        <View style={styles.container}>
            <LocationTracker />
            <EndButton handleClick={handleEnd}/>
        </View>
    )
}
//

const styles = StyleSheet.create({
    container: {
      width: "100%",
      height:"100dvh",
      justifyContent: 'space-between',
      flexDirection:"column",
      padding: 20,
      backgroundColor:"#141c21",
    },
  });

export default InfoPage;