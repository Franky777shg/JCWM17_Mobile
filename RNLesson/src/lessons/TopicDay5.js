import React from 'react'
import {
    View,
    Text,
    Dimensions,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    StyleSheet,
    StatusBar,
    SafeAreaView
} from 'react-native'
import { H1 } from '../components/H1'

const DEVICE_HEIGHT = Dimensions.get("window").height
const DEVICE_WIDTH = Dimensions.get("window").width

const TopicDay5 = () => {

    return (
        <SafeAreaView>
            {/* <StatusBar translucent> */}
            <Text style={{ fontSize: 25 }}>Hello World</Text>
            {/* <Text style={{ fontSize: 25 }}>Custom Component</Text>
            <H1 bold align="center">Ini Kalimat H1 Pakai Props Children Guys</H1>
            <Text style={{ fontSize: 25, marginTop: 20 }}>Dynamic Size</Text>
            <TouchableOpacity style={styles.btn}>
                <Text>Ini Button Pakai TouchableOpacity</Text>
            </TouchableOpacity>
            <TouchableHighlight style={styles.btn} underlayColor="white" activeOpacity={0.8} onPress={() => null}>
                <Text>Ini Button Pakai TouchableHighlight</Text>
            </TouchableHighlight> */}
            {/* </StatusBar> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: 'salmon',
        height: DEVICE_HEIGHT * 0.05,
        width: DEVICE_WIDTH * 0.8,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 10
    }
})

export default TopicDay5