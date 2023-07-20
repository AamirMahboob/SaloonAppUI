import React from 'react'
import { View, Text, TextInput, StyleSheet, SafeAreaView , TouchableOpacity} from 'react-native'
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
 
export default function Signin() {
    const navigation = useNavigation()
    const toHome = () =>{
        return navigation.navigate('Root')
    }
    const toSignUpScreen = () =>{
        return navigation.navigate('RegisterNow')
    }
    return (
        <SafeAreaView  >

            <View style={{ padding: 20, marginTop: 50, justifyContent: 'center', alignContent: 'center' }}>
                <View style={{
                    borderWidth: 2, marginLeft: 110, marginTop: 100,
                    borderRadius: 5, width: 160, justifyContent: 'center', alignContent: 'center'
                }}>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 80, fontWeight: 'bold'
                        , color: 'orange'
                    }}>SH</Text>
                </View>
                <View style={{ padding: 20 }}>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 30 }}>GOOD TO SEE YOU!</Text>
                    <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>WELCOME BACK,YOU'V BEEN MISSED!</Text>
                </View>

                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        keyboardType='email'
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry
                        
                    />
                    <TouchableOpacity>
                      <Text style = {{textAlign:'center', color: 'orange' , fontSize:16}}>Forgot Password?</Text>
                    </TouchableOpacity>
                     
                    <TouchableOpacity style={styles.button} onPress={toHome}>
                    <Text style={styles.buttonText}>Signin</Text>
                   </TouchableOpacity>
                    <Text style = {{textAlign:'center' , fontSize:16 , marginTop:10}} >Not a member?   <TouchableOpacity onPress={toSignUpScreen}><Text style = {{color: 'orange' , fontSize:16}} >Register now</Text></TouchableOpacity></Text>
                </View>

            </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    button: {
         marginLeft:80,
         height:50,
        width:200,
        marginTop:10,
        backgroundColor:'orange',
        paddingTop:10,
        borderRadius: 8,
         
      },
      buttonText: {
        textAlign:'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      },
  });