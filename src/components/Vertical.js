// SalonList.js

import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const salonData = [
  {
    id: '1',
    title: 'Salon 1',
    timing: '10:00 AM - 6:00 PM',
    image: ' https://cdn.pixabay.com/photo/2015/07/07/11/36/haircut-834280_1280.jpg', // Replace with actual image URL
  },
  {
    id: '2',
    title: 'Salon 2',
    timing: '9:00 AM - 5:00 PM',
    image: 'https://cdn.pixabay.com/photo/2017/07/20/10/51/beauty-salon-2521943_1280.jpg', // Replace with actual image URL
  },
  {
    id: '3',
    title: 'Salon 2',
    timing: '9:00 AM - 5:00 PM',
    image: 'https://cdn.pixabay.com/photo/2017/07/20/10/51/beauty-salon-2521943_1280.jpg', // Replace with actual image URL
  },
  {
    id: '4',
    title: 'Salon 2',
    timing: '9:00 AM - 5:00 PM',
    image: 'https://cdn.pixabay.com/photo/2017/07/20/10/51/beauty-salon-2521943_1280.jpg', // Replace with actual image URL
  },
  {
    id: '5',
    title: 'Salon 2',
    timing: '9:00 AM - 5:00 PM',
    image: 'https://cdn.pixabay.com/photo/2017/07/20/10/51/beauty-salon-2521943_1280.jpg', // Replace with actual image URL
  },

   
  // Add more salon data as needed
];

const Vertical = () => {
  const renderItem = ({ item }) => (
    <View style={styles.salonContainer}>
      <Image source={{ uri: item.image }} style={styles.salonImage} resizeMode="cover" />
      <View style={styles.salonInfo}>
        <Text style={styles.salonTitle}>{item.title}</Text>
        <Text style={styles.salonTiming}>{item.timing}</Text>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <TouchableOpacity style={styles.bookNowButton}>
          <Text style={styles.buttonText}>Book Now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.openSlotsButton}>
          <Text style={styles.buttonText}>Open Slots</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={salonData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 16,
    backgroundColor:'white'
  },
  salonContainer: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  salonImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 16,
  },
  salonInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  salonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  salonTiming: {
    color: '#666',
  },
  bookNowButton: {
    backgroundColor: 'orange',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginVertical: 8,
  },
  openSlotsButton: {
    backgroundColor: 'green',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginVertical:8
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Vertical;
