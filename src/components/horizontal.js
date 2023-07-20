// screens/HomeScreen.js

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';

const data = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
  { id: '3', title: 'Item 3' },
  { id: '3', title: 'Item 3' },
   
  

  // Add more items as needed
];

const  Horizontal = () => {
    const navigation =  useNavigation();
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('Home', { item })}
    >
      <Text style={styles.itemText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
         showsHorizontalScrollIndicator = {false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop:3,
    
     
     
    
    
    
  },
  listContainer: {
     height:60,
      
 
  },
  itemContainer: {
    width:100,
    padding: 10,
    backgroundColor: 'white',
    margin: 8,
    borderRadius: 10,
    borderWidth:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 15,
    color:'orange'
  },
});

export default Horizontal;
