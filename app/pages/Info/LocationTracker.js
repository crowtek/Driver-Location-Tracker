import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

export const LocationTracker = (props) => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    // Request permission to access the user's location
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      // Get the user's current location
      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
    })();

    // Update location every 5 minutes
    const interval = setInterval(() => {
      (async () => {
        const currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation);
      })();
    }, 5 * 60 * 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <View style={styles.datacontainer}>
      {location ? (
        <>
          <Text style={styles.locationText}>Latitude: {location.coords.latitude}</Text>
          <Text style={styles.locationText}>Longitude: {location.coords.longitude}</Text>
        </>

      ) : (
        <Text style={styles.locationText}>Fetching location...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  datacontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#1c2832",
    borderRadius: 5,
    padding: 40,
  },
  locationText: {
    flex: 1,
    fontSize: 20,
    textAlign: 'left',
    color:"white",
    margin: 10,
    lineHeight: 30
    
  },
  values:{
    marginLeft: 20,
    color: "#3468B0"
  }
});

export default LocationTracker;
