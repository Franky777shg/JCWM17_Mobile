import React, { useState } from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Button,
    TouchableOpacity
} from 'react-native'
import { useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'


const Login = ({ navigation }) => {
    const [dataUSer, setDataUser] = useState({
        username: "",
        password: ""
    })
    const dispatch = useDispatch()

    const onLogin = async () => {
        await AsyncStorage.setItem('username', dataUSer.username)

        dispatch({
            type: 'CHANGE_USERNAME',
            payload: dataUSer.username
        })
    }

    return (
        <View style={styles.cont}>
            <Text>Username</Text>
            <View style={styles.textinput}>
                <TextInput
                    placeholder="Your Username"
                    onChangeText={text => setDataUser({
                        ...dataUSer,
                        username: text
                    })}
                    value={dataUSer.username}
                />
            </View>
            <Text>Password</Text>
            <View style={styles.textinput}>
                <TextInput
                    placeholder="Your Password"
                    onChangeText={text => setDataUser({
                        ...dataUSer,
                        password: text
                    })}
                    value={dataUSer.password}
                    secureTextEntry
                />
            </View>
            <Button title="Login" onPress={onLogin} />
            <TouchableOpacity
                style={styles.gotoreg}
                onPress={() => navigation.push("Register")}
            >
                <Text>Register a New Account</Text>
            </TouchableOpacity>
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

export default Login