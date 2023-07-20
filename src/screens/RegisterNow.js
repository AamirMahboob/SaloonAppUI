import React from 'react'
import { View, Text, TextInput, StyleSheet, SafeAreaView , TouchableOpacity} from 'react-native'
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
 
export default function RegisterNow() {

    const navigation = useNavigation();
    
    const  toSignin = () =>{
        return navigation.navigate('Signin')
    }
    return (
        <SafeAreaView  >

            <View style={{ padding: 20, marginTop: 200, justifyContent: 'center', alignContent: 'center' }}>
                 
                <View style={{ padding: 20 }}>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 30 }}>READY TO SIGN UP?</Text>
                    <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>REGISTER BELOW WITH YOUR DETAILS</Text>
                </View>

                <View>
                <TextInput
                        style={styles.input}
                        placeholder="Name"
                    />
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
                    <TextInput
                        style={styles.input}
                        placeholder="Confirm Password"
                        secureTextEntry
                        
                    />
                    <TouchableOpacity>
                      <Text style = {{textAlign:'center', color: 'orange' , fontSize:16}}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={toSignin}>
                    <Text style={styles.buttonText}>Signup</Text>
                   </TouchableOpacity>
                    {/* <TouchableOpacity style={{alignItems:'center',justifyContent:'center',marginTop:10}} onPress={toBookme}><Text style = {{color: 'white' , fontSize:16,backgroundColor:'orange',textAlign:'center',width:150,height:30, }} >Signup</Text></TouchableOpacity>   */}
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