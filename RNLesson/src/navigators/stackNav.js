import React from 'react'
import {
    Text,
    Button,
    View
} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { useSelector, useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Home from '../screens/home'
import Profile from '../screens/profile'

const StackNav = () => {
    const Stack = createStackNavigator()
    const { username } = useSelector((state) => {
        return {
            username: state.userReducer.username
        }
    })
    const dispatch = useDispatch()

    const onLogout = async () => {
        await AsyncStorage.removeItem('username')

        dispatch({
            type: "RESET"
        })
    }

    return (
        <Stack.Navigator initialRouteName="Home" >
            <Stack.Screen name="Home" component={Home} options={{
                title: `Hello, ${username}`,
                headerRight: () => {
                    return (
                        <View style={{ marginRight: 15 }}>
                            <Button title="Logout" onPress={onLogout} />
                        </View>
                    )
                }
            }} />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    )
}

export default StackNav