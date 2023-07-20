import React from 'react'
import { View , StyleSheet,Text,TouchableOpacity} from 'react-native'
import FontAwesome5 from '@expo/vector-icons'

export default function Header() {
  return (
    <View> 
        <Text style={styles.headerTitle}>SpaHello</Text>
        <View style={styles.headerRightContainer}>
                <TouchableOpacity onPress={() => handleBellIconPress()}>
                  <FontAwesome5 name="bell" size={24} color="black" style={styles.headerIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleSaveIconPress()}>
                  <FontAwesome5 name="save" size={24} color="black" style={styles.headerIcon} />
                </TouchableOpacity>
              </View>
    </View>
  )
}
const styles = StyleSheet.create({
    headerTitle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    headerRightContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    headerIcon: {
      marginHorizontal: 10,
    },
  });