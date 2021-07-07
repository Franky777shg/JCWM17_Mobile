import React from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Button,
    TouchableOpacity
} from 'react-native'


const Register = () => {
    return (
        <View style={styles.cont}>
            <Text>Username</Text>
            <View style={styles.textinput}>
                <TextInput
                    placeholder="Your Username"
                    
                />
            </View>
            <Text>Password</Text>
            <View style={styles.textinput}>
                <TextInput
                    placeholder="Your Password"
                />
            </View>
            <Button title="Register" onPress={() => null} />
        </View>
    )
}

const styles = StyleSheet.create({
    cont: {
        justifyContent: 'center',
        flex: 1,
        paddingHorizontal: 32,
    },
    textinput: {
        backgroundColor: 'lightgray',
        paddingHorizontal: 8,
        borderRadius: 8,
        marginBottom: 20
    },
    gotoreg: {
        marginVertical: 15,
        alignSelf: 'center'
    }
})

export default Register