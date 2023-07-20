import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import Signin from './Signin';

const onboardingData = [
  {
    title: 'Book your favourite beautician and salon quickly',
    animation: require('./1.json'),
  },
  {
    title: 'Find nail saloon with open appointments near you',
    animation: require('./2.json'),
  },
  {
    title: 'Find nail salon easily in your hands!',
    animation: require('./3.json'),
  },
];

const OnBoarding = () => {
  const navigation = useNavigation();
  const [currentScreen, setCurrentScreen] = useState(0);
   
  const toSignin = () =>{
    navigation.navigate('Signin');
  }

  const onNext = () => {
    if (currentScreen === onboardingData.length - 1) {
      navigation.navigate('Signin'); // Navigate to Home screen after onboarding
    } else {
      setCurrentScreen((prevScreen) => prevScreen + 1);
    }
  };

  return (
    <View style={styles.container}>
      <LottieView
        source={onboardingData[currentScreen].animation}
        autoPlay
        loop
        style={styles.animation}
      />
      <Text style={styles.text}>{onboardingData[currentScreen].title}</Text>
      <View style={{ flexDirection:'row' , justifyContent:'space-between'}}>
      <TouchableOpacity style={styles.button} onPress={onNext}>
        <Text style={styles.buttonText}>{currentScreen === onboardingData.length - 1 ? 'Get Started' : 'Next'}</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.button} onPress={toSignin}>
         <Text style={styles.buttonText}>Skip</Text>
      </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',

  },
  animation: {
    width: 400,
    height: 400,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign:'center'
  },
  button: {
    backgroundColor:'orange',
    padding: 10,
    borderRadius: 8,
     
  },
  buttonText: {
    
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OnBoarding;

 