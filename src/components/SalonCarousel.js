 // SalonCarousel.js
 // SalonCarousel.js

import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const salonData = [
  {
    id: '1',
    title: 'Nail Salon 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: ' https://cdn.pixabay.com/photo/2017/08/05/13/13/people-2583493_1280.jpg', // Replace with actual image URL
    discount: '30%',
    overlayText: 'Text on Image 1',
  },
  {
    id: '2',
    title: 'Nail Salon 2',
    description: 'Praesent vestibulum semper velit nec fermentum.',
    image: 'https://cdn.pixabay.com/photo/2017/08/05/13/13/people-2583493_1280.jpg', // Replace with actual image URL
    discount: '30%',
    overlayText: 'Text on Image 2',
  },
  {
    id: '3',
    title: 'Nail Salon 3',
    description: 'Fusce condimentum metus eu risus cursus, eu faucibus.',
    image: 'https://cdn.pixabay.com/photo/2017/08/05/13/13/people-2583493_1280.jpg', // Replace with actual image URL
    discount: '30%',
    overlayText: 'Text on Image 3',
  },
];

const SalonCarousel = () => {

  const renderItem = ({ item }) => (
    <View style={{backgroundColor:'white'}}>
       <View style={styles.carouselItem}>
      <Image source={{ uri: item.image }} style={styles.salonImage} resizeMode="cover" />
      <View style={styles.textOverlay}>
        <Text style={styles.overlayText}>{item.overlayText}</Text>
      </View>
      <LinearGradient
        colors={['rgba(255, 165, 0, 0.7)', 'rgba(255, 165, 0, 0)']}
        style={styles.discountBadge}
      >
        <Text style={styles.discountText}>{item.discount}</Text>
      </LinearGradient>
      <View style={styles.salonInfo}>
        <Text style={styles.salonTitle}>{item.title}</Text>
        <Text style={styles.salonDescription}>{item.description}</Text>
      </View>
    </View>
    </View>
  );

  return (
    <View style={{backgroundColor:'white',borderColor:'green'}}>
    <Carousel
      data={salonData}
      renderItem={renderItem}
      sliderWidth={width}
      itemWidth={width * 0.8}
      layout={'default'}
      loop={false}
      autoplay={true}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselItem: {
   marginTop:10,
    borderRadius: 8,
    overflow: 'hidden',
    marginHorizontal: 10,
    
    
  },
  salonImage: {
    width: '100%',
    height: 160,
    
  },
  textOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  overlayText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  discountBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 4,
    borderRadius: 5,
  },
  discountText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  salonInfo: {
    padding: 10,
    backgroundColor: '#fff',
  },
  salonTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  salonDescription: {
    color: '#666',
    marginTop: 5,
  },
});

export default SalonCarousel;
