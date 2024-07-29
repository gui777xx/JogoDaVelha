import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'

export default function Figura() {
  return (
    <TouchableOpacity>
      <Entypo name='circle' size={100} color="#000" />
      </TouchableOpacity>
  )
}
