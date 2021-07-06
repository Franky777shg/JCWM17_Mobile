import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/home'
import Profile from '../screens/profile'

const StackNav = () => {
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator initialRouteName="Home" >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    )
}

export default StackNav