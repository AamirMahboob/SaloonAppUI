
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const LocationAutoComplete = () => {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search for location"
        minLength={2}  
        autoFocus={false}
        returnKeyType={'search'} 
        listViewDisplayed={false}  
        fetchDetails={true}
        onPress={(data, details = null) => {
          // 'data' is the selected item, 'details' is the place details
          console.log(data, details);
        }}
        query={{
          // This is the key step where you set up the Google Places API key
          key: 'YOUR_GOOGLE_PLACES_API_KEY',
          language: 'en', // language of the results
        }}
        styles={{
          textInputContainer: {
            width: '100%',
          },
          description: {
            fontWeight: 'bold',
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
        }}
        currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
        currentLocationLabel="Current location"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default LocationAutoComplete;
