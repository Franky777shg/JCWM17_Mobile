import React from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ScrollView,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Dimensions,
    Image
} from 'react-native'
import Nature from '../assets/images/nature.jpg'

const TopicDay4 = () => {
    const width = parseInt(Dimensions.get("screen").width)
    const height = parseInt(Dimensions.get("screen").height)

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <ScrollView style={{ padding: 10 }}>
                <KeyboardAvoidingView behavior={Platform.OS === 'android' ? "padding" : "position"}>
                    <View style={styles.title}>
                        <Text 
                        style={{ 
                            fontSize: 25,
                            fontFamily:'SourceCodePro-Bold'
                        }}
                        >
                            Contoh Custom Font
                        </Text>
                    </View>
                    <View style={styles.title}>
                        <Text style={{ fontSize: 25 }}>Dimensions devices Pixel 3a:</Text>
                        <Text style={{ fontSize: 25 }}>{width}</Text>
                        <Text style={{ fontSize: 25 }}>{height}</Text>
                    </View>
                    <Image
                        source={Nature}
                        style={{
                            height: height * 0.3,
                            width: width * 0.8,
                            alignSelf: 'center',
                            resizeMode: 'contain'
                        }}
                    />
                    <View style={styles.title}>
                        <Text style={{ fontSize: 25 }}>Platform Styling</Text>
                    </View>
                    <View style={Platform.select({
                        ios: styles.titleIos,
                        android: styles.titleAndroid
                    })}>
                        <Text style={{ fontSize: 25 }}>Platform Styling Advance</Text>
                    </View>
                    <TextInput style={styles.input} />
                    <TextInput style={styles.input} />
                    <TextInput style={styles.input} />
                    <TextInput style={styles.input} />
                    <TextInput style={styles.input} />
                    <TextInput style={styles.input} />
                    <TextInput style={styles.input} />
                    <TextInput style={styles.input} />
                    <TextInput style={styles.input} />
                    <TextInput placeholder="coba" style={styles.input} />
                    <TextInput style={styles.input} />
                    <TextInput style={styles.input} />
                    <TextInput style={styles.input} />
                </KeyboardAvoidingView>
            </ScrollView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 15
    },
    title: {
        backgroundColor: Platform.OS === 'ios' ? 'lightblue' : 'orange',
        borderWidth: 5,
        borderColor: Platform.OS === 'ios' ? 'orange' : 'lightblue',
    },
    titleIos: {
        backgroundColor: 'lightblue',
        borderWidth: 15,
        borderColor: 'orange'
    },
    titleAndroid: {
        backgroundColor: 'orange',
        borderWidth: 5,
        borderColor: 'lightblue'
    }
})

export default TopicDay4