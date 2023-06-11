import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

export const LocationTracker = () => {
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
    <View style={styles.container}>
      {location ? (
        <Text style={styles.locationText}>
          Latitude: {location.coords.latitude}
          {'\n'}
          Longitude: {location.coords.longitude}
        </Text>
      ) : (
        <Text style={styles.locationText}>Fetching location...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default LocationTracker;
