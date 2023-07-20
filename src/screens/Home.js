 import React from 'react';
 import { View, Text, StyleSheet, TouchableOpacity,SafeAreaView ,Dimensions} from 'react-native';
 import { FontAwesome, FontAwesome5 } from 'react-native-vector-icons';
 import Vertical from '../components/Vertical';
 import Header from '../components/Header';
  import Horizontal from '../components/horizontal';
 import SalonCarousel from '../components/SalonCarousel';
 

 const { width } = Dimensions.get('window');
 export default function Home() {
   return (
  
    <View style = {styles.container}>
    

      
     <View style = {styles.header} >
         <Text style={styles.headerTitle}>SpaHello</Text>
         <View style={styles.headerRightContainer}>
           <TouchableOpacity>
             <FontAwesome name="bell" size={20} color="black" style={styles.headerIcon} />
           </TouchableOpacity>
           <TouchableOpacity>
             <FontAwesome5 name="save" size={20} color="black" style={styles.headerIcon} />
           </TouchableOpacity>
         </View>    

     </View>
     <View style = {styles.carousel} >
          <SalonCarousel />
          <TouchableOpacity style={styles.openSlotsButton}>
          <Text style={styles.buttonText}>Open Slots</Text>
        </TouchableOpacity>
     </View>
     <View style = {styles.horizontal} >
          <Horizontal />
     </View>
     <View style = {styles.vertical} >
          <Vertical />
     </View>

     
      

      

     </View>
 
    
   );
 }

 const styles = StyleSheet.create({
     container:{
      flex:1,
       backgroundColor:'white',
      marginTop:25
     },
     header:{
      flex:0.06,
      margin:4,
      flexDirection:'row',
      justifyContent:'space-between'
     },
     carousel:{
      flex:0.5,
      marginTop:10
      
     },
     horizontal:{
      marginTop:10,
      flex:0.09,
       
     },
    vertical:{
      marginTop:10,
      flex:0.56,
       
     },
     openSlotsButton: {
      backgroundColor: 'orange',
       width:width * 0.9,
       height:50,
       paddingHorizontal: 16,
       borderRadius: 15,
      justifyContent:'center',
       marginTop:20,
       margin:20
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      padding:10
    },
    headerRightContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginRight:20
      
    },
    headerIcon:{
       margin:5
       
    },
    headerTitle:{
      color:'orange',
      fontWeight:'bold',
      fontSize:20,
      marginLeft:10
      
    }
 });
