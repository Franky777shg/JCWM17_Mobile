import React, { useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'


const Comment = () => {
    const { username } = useSelector((state) => {
        return {
            username: state.userReducer.username
        }
    })
    const dispatch = useDispatch()
    const dataUsername = "Hwoarang"

    useEffect(async () => {
        const usernameAS = await AsyncStorage.getItem('username')

        if (usernameAS) {
            dispatch({
                type: "CHANGE_USERNAME",
                payload: usernameAS
            })
        }

    }, [])

    const onChangeUser = async () => {
        await AsyncStorage.setItem('username', dataUsername)

        dispatch({
            type: "CHANGE_USERNAME",
            payload: dataUsername
        })
    }

    const onReset = async () => {
        await AsyncStorage.removeItem('username')

        dispatch({
            type: "RESET"
        })
    }

    return (
        <View style={{ backgroundColor: 'lightblue', flex: 1 }}>
            <Text style={{ fontSize: 25 }}>Comment Screens</Text>
            <Text>{username}</Text>
            <Button title="change username" onPress={onChangeUser} />
            <Button title="reset global state" onPress={onReset} />
        </View>
    )
}

export default Comment