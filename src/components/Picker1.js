import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const Picker1 = ({ option1, option2, option3, title }) => {
  const screenWidth = Dimensions.get('window').width;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('Select');

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <View style={[styles.container, { width: screenWidth * 0.9 }]}>
      <TouchableOpacity style={styles.dropdownHeader} onPress={handleToggleDropdown}>
        <Text style={styles.selectedValue}>{selectedValue}</Text>
      </TouchableOpacity>
      {isOpen && (
        <View style={[styles.dropdownOptions, { zIndex: 1 }]}>
          <TouchableOpacity style={styles.option} onPress={() => handleOptionSelect('option1')}>
            <Text>{option1}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={() => handleOptionSelect('option2')}>
            <Text>{option2}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={() => handleOptionSelect('option3')}>
            <Text>{option3}</Text>
          </TouchableOpacity>
        </View>
      )}
      {!isOpen && <View style={{ zIndex: -1}}> 
       
      </View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    position: 'relative',
    width: 200,
  },
  dropdownHeader: {
    borderRadius: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'orange',
  },
  selectedValue: {
    fontSize: 16,
  },
  dropdownOptions: {
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    marginTop: 5,
  },
  option: {
    padding: 10,
  },
});

export default Picker1;
