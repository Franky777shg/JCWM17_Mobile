import React from 'react'
import {
    View,
    Text
} from 'react-native'
import { H1 } from '../components/H1'

const TopicDay5 = () => {
    return (
        <View>
            <Text style={{ fontSize: 25 }}>Custom Component</Text>
            <H1 bold align="center">Ini Kalimat H1 Pakai Props Children Guys</H1>
        </View>
    )
}

export default TopicDay5