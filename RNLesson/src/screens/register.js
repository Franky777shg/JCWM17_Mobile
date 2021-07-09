import React, { useState } from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Button,
    TouchableOpacity
} from 'react-native'
import Axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'


const Register = () => {
    const [user, setUser] = useState({
        username: "",
        password: ""
    })
    const dispatch = useDispatch()

    const onRegister = () => {
        console.log(user)

        Axios.post('http://localhost:2000/users', user)
            .then(() => {
                AsyncStorage.setItem('username', user.username)
                    .then(() => {
                        dispatch({
                            type: 'CHANGE_USERNAME',
                            payload: user.username
                        })
                    })
                    .catch(err => console.log(err))

            })
            .catch(err => console.log(err))
    }
    
    return (
        <View style={styles.cont}>
            <Text>Username</Text>
            <View style={styles.textinput}>
                <TextInput
                    placeholder="Your Username"
                    value={user.username}
                    onChangeText={text => setUser({
                        ...user,
                        username: text
                    })}
                />
            </View>
            <Text>Password</Text>
            <View style={styles.textinput}>
                <TextInput
                    placeholder="Your Password"
                    value={user.password}
                    onChangeText={text => setUser({
                        ...user,
                        password: text
                    })}
                    secureTextEntry
                />
            </View>
            <Button title="Register" onPress={onRegister} />
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