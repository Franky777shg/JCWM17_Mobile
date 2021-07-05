import React from 'react'
import {
    Button
} from 'react-native'

export const BtnCustom = ({ navToProfile }) => {
    return <Button title="See Profile" onPress={navToProfile} />
}