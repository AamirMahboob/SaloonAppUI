import React from 'react'
import Horizontal from './horizontal'
import Vertical from './Vertical'
import { View } from 'react-native'
export default function AllFLatLists() {
  return (
    <View>
        <Horizontal />
        <Vertical />
        <Horizontal />
        <Vertical />
    </View>
  )
}
