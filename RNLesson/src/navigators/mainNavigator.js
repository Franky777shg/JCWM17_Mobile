import React, {useEffect} from 'react'
import LoginRegStack from './loginRegStack'
import BottomTabNav from './bottomTabNav'
import { NavigationContainer } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'

const MainNavigator = () => {
    const { username } = useSelector((state) => {
        return {
            username: state.userReducer.username
        }
    })
    const dispatch = useDispatch()

    useEffect( async () => {
        const usernameAS = await AsyncStorage.getItem('username')

        dispatch({
            type: "CHANGE_USERNAME",
            payload: usernameAS
        })
    }, [])

    return (
        <NavigationContainer>
            {
                username
                    ?
                    <BottomTabNav />
                    :
                    <LoginRegStack />

            }
        </NavigationContainer>
    )
}

export default MainNavigator