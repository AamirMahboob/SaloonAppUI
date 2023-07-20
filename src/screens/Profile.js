import React from 'react'
import { View ,Text, TextInput,SafeAreaView,StyleSheet} from 'react-native'
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
 


 
export default function Profile() {
   
    const navigation = useNavigation();
    
    const handleSignOut = () =>{
        return navigation.navigate('Signin')
    }
  return (
           <SafeAreaView style = {{marginTop:30}}>
              <View style = {styles.headerContainer}>
                   
              </View>
              <View style = {{marginTop:30}}>
              <Text style={{ textAlign: 'center', fontSize: 16, fontWeight:'bold' }}>Your Personal Information</Text>
              <TextInput
                        style={styles.input}
                        placeholder="Name"
                        placeholderTextColor={'orange'}
                        
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="userName"
                        placeholderTextColor={'orange'}

                      
                        
                    />
                    <TextInput
                        style={styles.input}
                        placeholderTextColor={'orange'}
                        placeholder="Email Address"
                        keyboardType='email'
                         
                    />
                    <CustomButton  title = 'Update'   />
                    
                    <CustomButton title='Logout' onPress={handleSignOut} />
              </View>

           </SafeAreaView>
            
        
  )
}


 
const styles = StyleSheet.create({
    headerContainer:{
      backgroundColor:'orange',
      height:300,
      borderBottomEndRadius:50,
      borderBottomStartRadius:50
    },
     input: {
      
      height: 60,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
});