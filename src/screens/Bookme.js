 import React from 'react'
 import { Text,View } from 'react-native'
 import Picker1 from '../components/Picker1'
import LocationAutoComplete from '../components/LocationAutoComplete'
import AllFLatLists from '../components/AllFLatLists'
import Horizontal from '../components/horizontal'
import Vertical from '../components/Vertical'
 export default function Bookme() {
   return (
     <View style={{marginTop:100}}> 
        <Picker1 option1='Nails shop' option2='Saloon' option3='Massage' title='Nailshop' />
        <Text style={{margin:20}} >Select your Services</Text>
        {/* <Picker1 option1='Service1' option2='Service2' option3='Service3' title='Services'  /> */}
        {/* <LocationAutoComplete /> */}
        <Horizontal />
        <Vertical />
     </View>
   )
 }
 