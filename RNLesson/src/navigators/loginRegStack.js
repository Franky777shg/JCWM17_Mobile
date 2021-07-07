import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/login'
import Register from '../screens/register'

const LoginRegStack = () => {
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    )
}

export default LoginRegStack